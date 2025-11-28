import React, { useReducer, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestOutcome, Investment } from "./types";
import { gameReducer, initialGameState } from "./gameReducer";
import { Navigation } from "./components/Navigation";
import { DashboardPage } from "./components/pages/DashboardPage";
import { MissionsPage } from "./components/pages/MissionsPage";
import { CityPage } from "./components/pages/CityPage";
import { FactionsPage } from "./components/pages/FactionsPage";
import { RulesPage } from "./components/pages/RulesPage";
import { SavesPage } from "./components/pages/SavesPage";
import { ThemeProvider } from "./ThemeContext";
import { PasswordProvider } from "./PasswordContext";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

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

  return (
    <ThemeProvider>
      <PasswordProvider>
        <BrowserRouter>
          <div className="App">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <Navigation />
            <div className="app-container">
              <main id="main-content" className="main-content">
                <Routes>
                <Route
                  path="/"
                  element={
                    <DashboardPage
                      state={state}
                      onStartTurn={handleStartTurn}
                      onResetGame={handleResetGame}
                    />
                  }
                />
                <Route
                  path="/missions"
                  element={
                    <MissionsPage
                      state={state}
                      onDrawQuests={handleDrawQuests}
                      onInvestInQuest={handleInvestInQuest}
                      onResolveQuest={handleResolveQuest}
                    />
                  }
                />
                <Route path="/city" element={<CityPage />} />
                <Route path="/factions" element={<FactionsPage />} />
                <Route path="/rules" element={<RulesPage />} />
                <Route
                  path="/saves"
                  element={
                    <SavesPage
                      onSaveGame={handleSaveGame}
                      onLoadGame={handleLoadGame}
                      onDeleteSave={handleDeleteSave}
                    />
                  }
                />
                </Routes>
              </main>
            </div>
          </div>
        </BrowserRouter>
      </PasswordProvider>
    </ThemeProvider>
  );
}

export default App;
