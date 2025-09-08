import {
  CampaignState,
  GameAction,
  QuestOutcome,
  MetricDelta,
  QuestState,
} from "./types";
import { questData } from "./questData";
import { memoryManager } from "./memoryUtils";

// Helper function to apply metric deltas
function applyDeltas(
  metrics: { H: number; S: number; U: number; O: number; R: number },
  deltas: MetricDelta
) {
  return {
    H: Math.max(0, Math.min(100, metrics.H + (deltas.H || 0))),
    S: Math.max(0, Math.min(100, metrics.S + (deltas.S || 0))),
    U: Math.max(0, Math.min(100, metrics.U + (deltas.U || 0))),
    O: Math.max(0, Math.min(10, metrics.O + (deltas.O || 0))), // Oppression capped at 10
    R: Math.max(0, metrics.R + (deltas.R || 0)),
  };
}

// Helper function to calculate partial effects (half of success, half of failure)
function calculatePartialEffects(
  success: MetricDelta,
  failure: MetricDelta
): MetricDelta {
  const result: MetricDelta = {};

  // Apply half of success effects (round toward zero)
  Object.entries(success).forEach(([key, value]) => {
    if (value !== undefined) {
      result[key as keyof MetricDelta] = Math.floor(value / 2);
    }
  });

  // Apply half of failure effects (round toward zero)
  Object.entries(failure).forEach(([key, value]) => {
    if (value !== undefined) {
      const current = result[key as keyof MetricDelta] || 0;
      result[key as keyof MetricDelta] = current + Math.floor(value / 2);
    }
  });

  return result;
}

// Helper function to calculate abandoned effects (light penalty, usually -1 S or -1 U)
function calculateAbandonedEffects(failure: MetricDelta): MetricDelta {
  // Apply failure Oppression if it exists, plus a light penalty
  const result: MetricDelta = { ...failure };

  // Add light penalty (prefer S, then U)
  if (failure.S !== undefined) {
    result.S = (result.S || 0) - 1;
  } else if (failure.U !== undefined) {
    result.U = (result.U || 0) - 1;
  } else {
    result.S = -1; // Default light penalty
  }

  return result;
}

// Helper function to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Initial state
export const initialGameState: CampaignState = {
  turn: 1,
  H: 10, // Hope (reduced from 20)
  S: 10, // Secrecy (reduced from 20)
  U: 10, // Unity (reduced from 20)
  O: 3, // Oppression (reduced from 10, max will be 10)
  R: 3, // Resources (reduced from 5)
  deck: questData.map((q) => q.gm),
  completed: [],
  discarded: [],
  lastDraw: [],
};

export function gameReducer(
  state: CampaignState,
  action: GameAction
): CampaignState {
  switch (action.type) {
    case "START_TURN": {
      // Oppression rises by +1 per turn
      const newMetrics = applyDeltas(
        { H: state.H, S: state.S, U: state.U, O: state.O, R: state.R },
        { O: 1 }
      );

      return {
        ...state,
        turn: state.turn + 1,
        ...newMetrics,
      };
    }

    case "DRAW_QUESTS": {
      // Draw 3 random quests from available deck
      const availableQuests = state.deck.filter(
        (quest) =>
          !state.completed.some((completed) => completed.id === quest.id) &&
          !state.discarded?.includes(quest.id)
      );

      const shuffled = shuffleArray(availableQuests);
      const drawn = shuffled.slice(0, 3);

      return {
        ...state,
        lastDraw: drawn.map((q) => q.id),
        drawnQuests: drawn,
      };
    }

    case "INVEST_IN_QUEST": {
      // Check if player has enough resources
      if (state.R < action.investment.costR) {
        return state; // Not enough resources
      }

      // Deduct resources
      return {
        ...state,
        R: state.R - action.investment.costR,
      };
    }

    case "RESOLVE_QUEST": {
      const quest = state.deck.find((q) => q.id === action.questId);
      if (!quest) return state;

      // Calculate base effects based on outcome
      let baseEffects: MetricDelta;
      let questState: QuestState;

      switch (action.outcome) {
        case "succeeded":
          baseEffects = quest.success;
          questState = {
            id: quest.id,
            status: "succeeded",
            turnResolved: state.turn,
            appliedDeltas: quest.success,
            notes: action.notes,
          };
          break;

        case "partial":
          baseEffects = calculatePartialEffects(quest.success, quest.failure);
          questState = {
            id: quest.id,
            status: "partial",
            turnResolved: state.turn,
            appliedDeltas: baseEffects,
            notes: action.notes,
          };
          break;

        case "failed":
          baseEffects = quest.failure;
          questState = {
            id: quest.id,
            status: "failed",
            turnResolved: state.turn,
            appliedDeltas: quest.failure,
            notes: action.notes,
          };
          break;

        case "abandoned":
          baseEffects = calculateAbandonedEffects(quest.failure);
          questState = {
            id: quest.id,
            status: "abandoned",
            turnResolved: state.turn,
            appliedDeltas: baseEffects,
            notes: action.notes,
          };
          break;

        default:
          return state;
      }

      // Apply the effects
      const newMetrics = applyDeltas(
        { H: state.H, S: state.S, U: state.U, O: state.O, R: state.R },
        baseEffects
      );

      return {
        ...state,
        ...newMetrics,
        completed: [...state.completed, questState],
        drawnQuests: state.drawnQuests?.filter((q) => q.id !== quest.id) || [],
      };
    }

    case "RESET_GAME":
      return initialGameState;

    case "SAVE_GAME": {
      const success = memoryManager.saveGame(state, action.saveName);
      if (success) {
        console.log(`Game saved as: ${action.saveName}`);
      } else {
        console.error(`Failed to save game: ${action.saveName}`);
      }
      return state; // No state change, just side effect
    }

    case "LOAD_GAME": {
      const loadedState = memoryManager.loadGame(action.saveName);
      if (loadedState) {
        console.log(`Game loaded: ${action.saveName}`);
        return loadedState;
      } else {
        console.error(`Failed to load game: ${action.saveName}`);
        return state;
      }
    }

    case "DELETE_SAVE": {
      const success = memoryManager.deleteSave(action.saveName);
      if (success) {
        console.log(`Save deleted: ${action.saveName}`);
      } else {
        console.error(`Failed to delete save: ${action.saveName}`);
      }
      return state; // No state change, just side effect
    }

    case "AUTO_SAVE": {
      memoryManager.autoSave(state);
      return state; // No state change, just side effect
    }

    default:
      return state;
  }
}
