import React, { useReducer, useState, useEffect } from "react";
import { CampaignState, GameAction, QuestOutcome, Investment } from "./types";
import { gameReducer, initialGameState } from "./gameReducer";
import { questData } from "./questData";
import { GameHeader } from "./components/GameHeader";
import { QuestDrawer } from "./components/QuestDrawer";
import { HistoryPanel } from "./components/HistoryPanel";
import { MemoryManager } from "./components/MemoryManager";
import { ThemeToggle } from "./components/ThemeToggle";
import { Eye, EyeOff } from "lucide-react";
import { memoryManager } from "./memoryUtils";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);
  const [isGMView, setIsGMView] = useState(false);

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

  // Get available quests (not completed or discarded)
  const availableQuests = state.deck.filter(
    (quest) =>
      !state.completed.some((completed) => completed.id === quest.id) &&
      !state.discarded?.includes(quest.id)
  );

  return (
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
          <ThemeToggle />
        </div>

        <main id="main-content" className="main-content">
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
        </main>
      </div>
    </div>
  );
}

export default App;
