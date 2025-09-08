import { CampaignState, GameSave, MemoryState } from "./types";

const STORAGE_KEY = "campaign-cards-saves";
const AUTO_SAVE_KEY = "campaign-cards-autosave";
const GAME_VERSION = "1.0.0";

export class MemoryManager {
  private static instance: MemoryManager;
  private memoryState: MemoryState = { saves: [] };

  private constructor() {
    this.loadMemoryState();
  }

  public static getInstance(): MemoryManager {
    if (!MemoryManager.instance) {
      MemoryManager.instance = new MemoryManager();
    }
    return MemoryManager.instance;
  }

  private loadMemoryState(): void {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        this.memoryState = {
          saves: parsed.saves || [],
          lastAutoSave: parsed.lastAutoSave,
        };
      }
    } catch (error) {
      console.warn("Failed to load memory state:", error);
      this.memoryState = { saves: [] };
    }
  }

  private saveMemoryState(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.memoryState));
    } catch (error) {
      console.warn("Failed to save memory state:", error);
    }
  }

  public saveGame(state: CampaignState, saveName: string): boolean {
    try {
      const gameSave: GameSave = {
        id: `${saveName}-${Date.now()}`,
        name: saveName,
        timestamp: Date.now(),
        state: { ...state },
        version: GAME_VERSION,
      };

      // Remove any existing save with the same name
      this.memoryState.saves = this.memoryState.saves.filter(
        (save) => save.name !== saveName
      );

      // Add new save
      this.memoryState.saves.push(gameSave);

      // Keep only the 10 most recent saves
      this.memoryState.saves.sort((a, b) => b.timestamp - a.timestamp);
      this.memoryState.saves = this.memoryState.saves.slice(0, 10);

      this.saveMemoryState();
      return true;
    } catch (error) {
      console.warn("Failed to save game:", error);
      return false;
    }
  }

  public loadGame(saveName: string): CampaignState | null {
    try {
      const save = this.memoryState.saves.find((s) => s.name === saveName);
      if (save) {
        return save.state;
      }
      return null;
    } catch (error) {
      console.warn("Failed to load game:", error);
      return null;
    }
  }

  public deleteSave(saveName: string): boolean {
    try {
      this.memoryState.saves = this.memoryState.saves.filter(
        (save) => save.name !== saveName
      );
      this.saveMemoryState();
      return true;
    } catch (error) {
      console.warn("Failed to delete save:", error);
      return false;
    }
  }

  public getSaves(): GameSave[] {
    return [...this.memoryState.saves];
  }

  public autoSave(state: CampaignState): boolean {
    try {
      const autoSave: GameSave = {
        id: "autosave",
        name: "Auto Save",
        timestamp: Date.now(),
        state: { ...state },
        version: GAME_VERSION,
      };

      localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(autoSave));
      this.memoryState.lastAutoSave = Date.now();
      this.saveMemoryState();
      return true;
    } catch (error) {
      console.warn("Failed to auto save:", error);
      return false;
    }
  }

  public loadAutoSave(): CampaignState | null {
    try {
      const stored = localStorage.getItem(AUTO_SAVE_KEY);
      if (stored) {
        const autoSave: GameSave = JSON.parse(stored);
        return autoSave.state;
      }
      return null;
    } catch (error) {
      console.warn("Failed to load auto save:", error);
      return null;
    }
  }

  public hasAutoSave(): boolean {
    return localStorage.getItem(AUTO_SAVE_KEY) !== null;
  }

  public clearAutoSave(): void {
    localStorage.removeItem(AUTO_SAVE_KEY);
    this.memoryState.lastAutoSave = undefined;
    this.saveMemoryState();
  }

  public exportSave(saveName: string): string | null {
    try {
      const save = this.memoryState.saves.find((s) => s.name === saveName);
      if (save) {
        return JSON.stringify(save, null, 2);
      }
      return null;
    } catch (error) {
      console.warn("Failed to export save:", error);
      return null;
    }
  }

  public importSave(saveData: string): boolean {
    try {
      const save: GameSave = JSON.parse(saveData);

      // Validate save structure
      if (!save.id || !save.name || !save.state || !save.version) {
        throw new Error("Invalid save data structure");
      }

      // Remove any existing save with the same name
      this.memoryState.saves = this.memoryState.saves.filter(
        (s) => s.name !== save.name
      );

      // Add imported save
      this.memoryState.saves.push(save);
      this.saveMemoryState();
      return true;
    } catch (error) {
      console.warn("Failed to import save:", error);
      return false;
    }
  }
}

// Export singleton instance
export const memoryManager = MemoryManager.getInstance();
