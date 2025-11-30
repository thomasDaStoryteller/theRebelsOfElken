import {
  CampaignState,
  GameAction,
  QuestOutcome,
  MetricDelta,
  QuestState,
  TierRequirement,
  Quest,
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
    O: Math.max(0, Math.min(100, metrics.O + (deltas.O || 0))), // Oppression 0-100 for tier system
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

// Tier system helpers
function getTierBand(value: number): "Low" | "Med" | "High" {
  if (value <= 33) return "Low";
  if (value <= 66) return "Med";
  return "High";
}

function matchesRequirement(
  band: "Low" | "Med" | "High",
  requirement: TierRequirement
): boolean {
  switch (requirement) {
    case "Low":
      return band === "Low";
    case "Med":
      return band === "Med";
    case "High":
      return band === "High";
    case "Low–Med":
      return band === "Low" || band === "Med";
    case "Med–High":
      return band === "Med" || band === "High";
    default:
      return false;
  }
}

function isQuestAvailable(quest: Quest, state: CampaignState): boolean {
  const oppressionBand = getTierBand(state.O);
  const secrecyBand = getTierBand(state.S);
  const hopeBand = getTierBand(state.H);
  const unityBand = getTierBand(state.U);

  // Check oppression requirement
  if (!matchesRequirement(oppressionBand, quest.availabilityOppression)) {
    return false;
  }

  // Check secondary track requirement
  const secondaryBand =
    quest.availabilitySecondary.track === "S"
      ? secrecyBand
      : quest.availabilitySecondary.track === "H"
      ? hopeBand
      : unityBand;

  return matchesRequirement(secondaryBand, quest.availabilitySecondary.requirement);
}

// Initial state
export const initialGameState: CampaignState = {
  turn: 1,
  H: 10, // Hope (reduced from 20)
  S: 10, // Secrecy (reduced from 20)
  U: 10, // Unity (reduced from 20)
  O: 25, // Oppression (0-100 scale, starts in Low tier: 0-33)
  R: 3, // Resources (reduced from 5)
  deck: questData.map((q) => q.gm),
  completed: [],
  discarded: [],
  lastDraw: [],
  selectedQuest: undefined,
};

export function gameReducer(
  state: CampaignState,
  action: GameAction
): CampaignState {
  switch (action.type) {
    case "START_TURN": {
      // Just increment turn (Oppression now increases on quest resolution)
      return {
        ...state,
        turn: state.turn + 1,
      };
    }

    case "DRAW_QUESTS": {
      // Draw 3 random quests from available deck
      // First filter by tier availability, then by completion/discard status
      const availableQuests = state.deck.filter(
        (quest) =>
          isQuestAvailable(quest, state) &&
          !state.completed.some((completed) => completed.id === quest.id) &&
          !state.discarded?.includes(quest.id) &&
          !state.drawnQuests?.some((drawn) => drawn.id === quest.id)
      );

      const shuffled = shuffleArray(availableQuests);
      const drawn = shuffled.slice(0, 3);

      return {
        ...state,
        lastDraw: drawn.map((q) => q.id),
        drawnQuests: drawn,
      };
    }

    case "DRAW_SINGLE_QUEST": {
      // Draw 1 random quest from available deck (GM view)
      // Maximum of 3 quests can be drawn at a time
      const currentDrawnCount = state.drawnQuests?.length || 0;
      if (currentDrawnCount >= 3) {
        return state; // Already at max (3 quests)
      }

      // First filter by tier availability, then by completion/discard status
      const availableQuests = state.deck.filter(
        (quest) =>
          isQuestAvailable(quest, state) &&
          !state.completed.some((completed) => completed.id === quest.id) &&
          !state.discarded?.includes(quest.id) &&
          !state.drawnQuests?.some((drawn) => drawn.id === quest.id)
      );

      if (availableQuests.length === 0) {
        return state; // No quests available
      }

      const shuffled = shuffleArray(availableQuests);
      const drawn = shuffled[0];

      return {
        ...state,
        lastDraw: [drawn.id],
        drawnQuests: [...(state.drawnQuests || []), drawn],
      };
    }

    case "REJECT_QUEST": {
      // Remove quest from drawnQuests and add to discarded
      const questToReject = state.drawnQuests?.find(
        (q) => q.id === action.questId
      );

      if (!questToReject) {
        return state; // Quest not found
      }

      // Remove from drawnQuests
      const updatedDrawnQuests = state.drawnQuests?.filter(
        (q) => q.id !== action.questId
      );

      // Add to discarded
      const updatedDiscarded = [
        ...(state.discarded || []),
        action.questId,
      ];

      // If this was the selected quest, deselect it
      const updatedSelectedQuest =
        state.selectedQuest === action.questId
          ? undefined
          : state.selectedQuest;

      return {
        ...state,
        drawnQuests: updatedDrawnQuests,
        discarded: updatedDiscarded,
        selectedQuest: updatedSelectedQuest,
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
          break;

        case "partial":
          baseEffects = calculatePartialEffects(quest.success, quest.failure);
          break;

        case "failed":
          baseEffects = quest.failure;
          break;

        case "abandoned":
          baseEffects = calculateAbandonedEffects(quest.failure);
          break;

        default:
          return state;
      }

      // Apply the effects, plus Oppression increases by +1 when a mission is resolved
      const effectsWithOppression = {
        ...baseEffects,
        O: (baseEffects.O || 0) + 1, // Oppression always increases by +1 on quest resolution
      };

      // Create questState with the actual applied deltas (including Oppression increase)
      questState = {
        id: quest.id,
        status: action.outcome,
        turnResolved: state.turn,
        appliedDeltas: effectsWithOppression,
        notes: action.notes,
      };

      const newMetrics = applyDeltas(
        { H: state.H, S: state.S, U: state.U, O: state.O, R: state.R },
        effectsWithOppression
      );

      return {
        ...state,
        ...newMetrics,
        completed: [...state.completed, questState],
        drawnQuests: state.drawnQuests?.filter((q) => q.id !== quest.id) || [],
      };
    }

    case "SELECT_QUEST": {
      // Only one quest can be selected at a time - selecting a new one replaces the previous
      return {
        ...state,
        selectedQuest: action.questId || undefined,
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

    case "SET_STATE": {
      // Directly set state (used for remote sync)
      return action.state;
    }

    default:
      return state;
  }
}
