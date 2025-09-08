export type MetricDelta = {
  H?: number;
  S?: number;
  U?: number;
  O?: number;
  R?: number;
};

export type Investment = {
  label: string; // e.g., "Stealth Kit"
  costR: number; // e.g., 1
  effectOnSuccess?: MetricDelta;
  ruleText?: string; // e.g., "Ignore first failed Stealth"
};

export type Quest = {
  id: string; // stable slug
  title: string;
  category:
    | "Smuggling"
    | "Propaganda"
    | "Unity"
    | "Secrecy"
    | "Resources"
    | "Special";
  hook: string; // player-facing
  costR: number; // Resources to start the mission (0 if none)
  success: MetricDelta;
  failure: MetricDelta;
  failureNotes?: string; // e.g., "Oppression +1 always"
  partialRule?: string; // if any quest has a special partial rule
  optionalInvestments: Investment[]; // suggested pre-mission spends
  complications: string[]; // GM color
  ties: string[]; // factions/individuals
};

export type QuestState = {
  id: string;
  status: "succeeded" | "failed" | "abandoned" | "partial";
  turnResolved: number;
  appliedDeltas: MetricDelta; // after partial rules & investments
  notes?: string;
};

export type CampaignState = {
  turn: number;
  H: number;
  S: number;
  U: number;
  O: number;
  R: number;
  deck: Quest[]; // remaining/available quests
  completed: QuestState[]; // history
  discarded?: string[]; // if you allow permanent removal
  lastDraw?: string[]; // ids of last drawn 3
  drawnQuests?: Quest[]; // currently drawn quests for selection
};

export type QuestWithViews = {
  gm: Quest;
  player: {
    title: string;
    hook: string;
  };
};

export type QuestOutcome = "succeeded" | "failed" | "abandoned" | "partial";

export type GameAction =
  | { type: "START_TURN" }
  | { type: "DRAW_QUESTS" }
  | { type: "INVEST_IN_QUEST"; questId: string; investment: Investment }
  | {
      type: "RESOLVE_QUEST";
      questId: string;
      outcome: QuestOutcome;
      notes?: string;
    }
  | { type: "RESET_GAME" }
  | { type: "SAVE_GAME"; saveName: string }
  | { type: "LOAD_GAME"; saveName: string }
  | { type: "DELETE_SAVE"; saveName: string }
  | { type: "AUTO_SAVE" };

export type GameSave = {
  id: string;
  name: string;
  timestamp: number;
  state: CampaignState;
  version: string;
};

export type MemoryState = {
  saves: GameSave[];
  lastAutoSave?: number;
};

export type GameMetrics = {
  H: number; // Hope
  S: number; // Secrecy
  U: number; // Unity
  O: number; // Oppression
  R: number; // Resources
};
