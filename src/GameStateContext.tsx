import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import {
  CampaignState,
  GameAction,
  QuestOutcome,
  Investment,
} from "./types";
import { gameReducer, initialGameState } from "./gameReducer";
import { fetchState, updateState } from "./apiClient";

interface GameStateContextType {
  state: CampaignState;
  dispatch: React.Dispatch<GameAction>;
  isLoading: boolean;
  isSyncing: boolean;
  error: string | null;
  // Action handlers
  startTurn: () => void;
  drawQuests: () => void;
  drawSingleQuest: () => void;
  rejectQuest: (questId: string) => void;
  investInQuest: (questId: string, investment: Investment) => void;
  resolveQuest: (
    questId: string,
    outcome: QuestOutcome,
    notes?: string
  ) => void;
  selectQuest: (questId: string | null) => void;
  resetGame: () => void;
  saveGame: (saveName: string) => void;
  loadGame: (saveName: string) => void;
  deleteSave: (saveName: string) => void;
}

const GameStateContext = createContext<GameStateContextType | undefined>(
  undefined
);

const SYNC_DEBOUNCE_MS = 500;
const POLL_INTERVAL_MS = 8000; // 8 seconds
const LOCAL_STORAGE_KEY = "campaign-cards-state-cache";

interface GameStateProviderProps {
  children: ReactNode;
}

export const GameStateProvider: React.FC<GameStateProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSyncing, setIsSyncing] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pollIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncedStateRef = useRef<string | null>(null);
  const isInitialLoadRef = useRef(true);

  // Load initial state from API or localStorage
  useEffect(() => {
    const loadInitialState = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Try to fetch from API first
        const remoteState = await fetchState();

        if (remoteState) {
          // Use remote state if available
          dispatch({ type: "SET_STATE", state: remoteState });
          localStorage.setItem(
            LOCAL_STORAGE_KEY,
            JSON.stringify(remoteState)
          );
          lastSyncedStateRef.current = JSON.stringify(remoteState);
        } else {
          // No remote state, try localStorage
          const cachedState = localStorage.getItem(LOCAL_STORAGE_KEY);
          if (cachedState) {
            try {
              const parsed = JSON.parse(cachedState) as CampaignState;
              // Validate and use cached state
              if (parsed && typeof parsed.turn === "number") {
                dispatch({ type: "SET_STATE", state: parsed });
                lastSyncedStateRef.current = cachedState;
              }
            } catch (e) {
              console.warn("Failed to parse cached state:", e);
            }
          }
          // If no cached state, initialGameState from reducer will be used
        }
      } catch (err) {
        console.error("Failed to load initial state:", err);
        setError(err instanceof Error ? err.message : "Failed to load state");
        // Fallback to localStorage
        const cachedState = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (cachedState) {
          try {
            const parsed = JSON.parse(cachedState) as CampaignState;
            if (parsed && typeof parsed.turn === "number") {
              dispatch({ type: "SET_STATE", state: parsed });
              lastSyncedStateRef.current = cachedState;
            }
          } catch (e) {
            // Use initial state from reducer
          }
        }
      } finally {
        setIsLoading(false);
        isInitialLoadRef.current = false;
      }
    };

    loadInitialState();
  }, []);

  // Sync state to API when it changes
  useEffect(() => {
    if (isInitialLoadRef.current) {
      return; // Don't sync during initial load
    }

    const stateString = JSON.stringify(state);

    // Skip if state hasn't changed
    if (stateString === lastSyncedStateRef.current) {
      return;
    }

    // Clear existing timeout
    if (syncTimeoutRef.current) {
      clearTimeout(syncTimeoutRef.current);
    }

    // Debounce the sync
    syncTimeoutRef.current = setTimeout(async () => {
      try {
        setIsSyncing(true);
        setError(null);

        if (isOnline) {
          await updateState(state);
          lastSyncedStateRef.current = stateString;
          // Also save to localStorage as backup
          localStorage.setItem(LOCAL_STORAGE_KEY, stateString);
        } else {
          // Offline - just save to localStorage
          localStorage.setItem(LOCAL_STORAGE_KEY, stateString);
        }
      } catch (err) {
        console.error("Failed to sync state:", err);
        setError(err instanceof Error ? err.message : "Failed to sync state");
        // Save to localStorage as fallback
        localStorage.setItem(LOCAL_STORAGE_KEY, stateString);
      } finally {
        setIsSyncing(false);
      }
    }, SYNC_DEBOUNCE_MS);

    return () => {
      if (syncTimeoutRef.current) {
        clearTimeout(syncTimeoutRef.current);
      }
    };
  }, [state, isOnline]);

  // Poll for remote updates
  useEffect(() => {
    if (!isOnline || isInitialLoadRef.current) {
      return;
    }

    const poll = async () => {
      try {
        const remoteState = await fetchState();
        if (remoteState) {
          const remoteString = JSON.stringify(remoteState);
          const currentString = JSON.stringify(state);
          const lastSyncedString = lastSyncedStateRef.current;

          // Only update if remote is different from current AND different from last synced
          // This prevents overwriting local changes that haven't synced yet
          if (
            remoteString !== currentString &&
            remoteString !== lastSyncedString
          ) {
            // Check if remote state is actually newer
            // Simple heuristic: compare turn numbers
            const remoteTurn = remoteState.turn || 0;
            const currentTurn = state.turn || 0;

            // If remote turn is higher or equal, update to remote state
            // (Last-write-wins strategy)
            if (remoteTurn >= currentTurn) {
              console.log("Remote state is newer, updating...");
              dispatch({ type: "SET_STATE", state: remoteState });
              localStorage.setItem(
                LOCAL_STORAGE_KEY,
                JSON.stringify(remoteState)
              );
              lastSyncedStateRef.current = remoteString;
            }
          }
        }
      } catch (err) {
        // Silently fail polling - don't show errors for background polling
        console.debug("Poll failed:", err);
      }
    };

    // Poll immediately, then on interval
    poll();
    pollIntervalRef.current = setInterval(poll, POLL_INTERVAL_MS);

    return () => {
      if (pollIntervalRef.current) {
        clearInterval(pollIntervalRef.current);
      }
    };
  }, [isOnline, state]);

  // Monitor online/offline status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Action handlers
  const startTurn = useCallback(() => {
    dispatch({ type: "START_TURN" });
  }, []);

  const drawQuests = useCallback(() => {
    dispatch({ type: "DRAW_QUESTS" });
  }, []);

  const drawSingleQuest = useCallback(() => {
    dispatch({ type: "DRAW_SINGLE_QUEST" });
  }, []);

  const rejectQuest = useCallback((questId: string) => {
    dispatch({ type: "REJECT_QUEST", questId });
  }, []);

  const investInQuest = useCallback(
    (questId: string, investment: Investment) => {
      dispatch({ type: "INVEST_IN_QUEST", questId, investment });
    },
    []
  );

  const resolveQuest = useCallback(
    (questId: string, outcome: QuestOutcome, notes?: string) => {
      dispatch({ type: "RESOLVE_QUEST", questId, outcome, notes });
    },
    []
  );

  const selectQuest = useCallback((questId: string | null) => {
    dispatch({ type: "SELECT_QUEST", questId });
  }, []);

  const resetGame = useCallback(() => {
    if (
      window.confirm(
        "Are you sure you want to reset the game? This will lose all progress."
      )
    ) {
      dispatch({ type: "RESET_GAME" });
    }
  }, []);

  const saveGame = useCallback((saveName: string) => {
    dispatch({ type: "SAVE_GAME", saveName });
  }, []);

  const loadGame = useCallback((saveName: string) => {
    dispatch({ type: "LOAD_GAME", saveName });
  }, []);

  const deleteSave = useCallback((saveName: string) => {
    dispatch({ type: "DELETE_SAVE", saveName });
  }, []);

  const value: GameStateContextType = {
    state,
    dispatch,
    isLoading,
    isSyncing,
    error,
    startTurn,
    drawQuests,
    drawSingleQuest,
    rejectQuest,
    investInQuest,
    resolveQuest,
    selectQuest,
    resetGame,
    saveGame,
    loadGame,
    deleteSave,
  };

  return (
    <GameStateContext.Provider value={value}>
      {children}
    </GameStateContext.Provider>
  );
};

export function useGameState(): GameStateContextType {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error("useGameState must be used within a GameStateProvider");
  }
  return context;
}

