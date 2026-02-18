import React, { useReducer, useState, useEffect, useRef } from "react";
import { QuestOutcome, Investment } from "./types";
import { gameReducer, initialGameState } from "./gameReducer";
import { GameHeader } from "./components/GameHeader";
import { QuestDrawer } from "./components/QuestDrawer";
import { HistoryPanel } from "./components/HistoryPanel";
import { MemoryManager } from "./components/MemoryManager";
import { ThemeSelector } from "./components/ThemeSelector";
import { RulesPage } from "./components/RulesPage";
import { ThemeProvider } from "./ThemeContext";
import { Eye, EyeOff, BookOpen } from "lucide-react";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [isGMView, setIsGMView] = useState(false);
  const [showRules, setShowRules] = useState(false);

  // Refs to control Redis sync behaviour
  const hasSynced = useRef(false);
  const skipNextPush = useRef(false);

  const handleStartTurn = () => {
    dispatch({ type: "START_TURN" });
  };

  const handleDrawQuests = () => {
    dispatch({ type: "DRAW_QUESTS" });
  };

  const handleInvestInQuest = (questId: string, investment: Investment) => {
    dispatch({ type: "INVEST_IN_QUEST", questId, investment });
  };

  const handleResolveQuest = (
    questId: string,
    outcome: QuestOutcome,
    notes?: string
  ) => {
    dispatch({ type: "RESOLVE_QUEST", questId, outcome, notes });
  };

  const handleResetGame = () => {
    if (
      window.confirm(
        "Are you sure you want to reset the game? This will lose all progress."
      )
    ) {
      dispatch({ type: "RESET_GAME" });
    }
  };

  const handleSaveGame = (saveName: string) => {
    dispatch({ type: "SAVE_GAME", saveName });
  };

  const handleLoadGame = (saveName: string) => {
    dispatch({ type: "LOAD_GAME", saveName });
  };

  const handleDeleteSave = (saveName: string) => {
    dispatch({ type: "DELETE_SAVE", saveName });
  };

  // Auto-save functionality
  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      dispatch({ type: "AUTO_SAVE" });
    }, 30000); // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval);
  }, []);

  // Auto-save on significant state changes
  useEffect(() => {
    if (state.turn > 1 || state.completed.length > 0) {
      dispatch({ type: "AUTO_SAVE" });
    }
  }, [state.turn, state.completed.length]);

  // Load shared state from Redis on mount
  useEffect(() => {
    fetch("/api/game-state")
      .then((res) => res.json())
      .then(({ state: remoteState }) => {
        if (remoteState) {
          skipNextPush.current = true;
          dispatch({
            type: "LOAD_STATE",
            state: { ...remoteState, deck: initialGameState.deck },
          });
        }
      })
      .catch(console.error)
      .finally(() => {
        hasSynced.current = true;
      });
  }, []);

  // Push state to Redis whenever it changes
  useEffect(() => {
    if (!hasSynced.current) return;
    if (skipNextPush.current) {
      skipNextPush.current = false;
      return;
    }
    // Exclude the static deck from storage to keep the payload small
    const { deck: _deck, ...stateToSync } = state;
    const timeoutId = setTimeout(() => {
      fetch("/api/game-state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(stateToSync),
      }).catch(console.error);
    }, 200);
    return () => clearTimeout(timeoutId);
  }, [state]);

  // Get available quests (not completed or discarded)
  const availableQuests = state.deck.filter(
    (quest) =>
      !state.completed.some((completed) => completed.id === quest.id) &&
      !state.discarded?.includes(quest.id)
  );

  return (
    <ThemeProvider>
      <div className="App">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <div className="app-container">
          <GameHeader
            state={state}
            onStartTurn={handleStartTurn}
            onResetGame={handleResetGame}
          />

          <div className="view-toggle">
            <button
              className={`view-button ${isGMView ? "active" : ""}`}
              onClick={() => setIsGMView(!isGMView)}
              aria-label={`Switch to ${isGMView ? "Player" : "GM"} view`}
              aria-pressed={isGMView}
            >
              {isGMView ? (
                <EyeOff className="icon" aria-hidden="true" />
              ) : (
                <Eye className="icon" aria-hidden="true" />
              )}
              {isGMView ? "Player View" : "GM View"}
            </button>
            <button
              className="view-button"
              onClick={() => setShowRules(true)}
              aria-label="View rules"
            >
              <BookOpen className="icon" aria-hidden="true" />
              Rules
            </button>
            <ThemeSelector />
          </div>

          <main id="main-content" className="main-content">
            {showRules ? (
              <RulesPage onBack={() => setShowRules(false)} />
            ) : (
              <>
                <QuestDrawer
                  availableQuests={availableQuests}
                  drawnQuests={state.drawnQuests}
                  onDrawQuests={handleDrawQuests}
                  onInvestInQuest={handleInvestInQuest}
                  onResolveQuest={handleResolveQuest}
                  availableResources={state.R}
                  isGMView={isGMView}
                />

                <div className="bottom-panels">
                  <MemoryManager
                    onSaveGame={handleSaveGame}
                    onLoadGame={handleLoadGame}
                    onDeleteSave={handleDeleteSave}
                  />
                  <HistoryPanel completedQuests={state.completed} />
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
