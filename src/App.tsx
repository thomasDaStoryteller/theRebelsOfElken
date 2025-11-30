import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { DashboardPage } from "./components/pages/DashboardPage";
import { MissionsPage } from "./components/pages/MissionsPage";
import { CityPage } from "./components/pages/CityPage";
import { FactionsPage } from "./components/pages/FactionsPage";
import { RulesPage } from "./components/pages/RulesPage";
import { SavesPage } from "./components/pages/SavesPage";
import { ThemeProvider } from "./ThemeContext";
import { PasswordProvider } from "./PasswordContext";
import { GameStateProvider } from "./GameStateContext";
import "./App.css";

function App() {

  return (
    <ThemeProvider>
      <PasswordProvider>
        <GameStateProvider>
          <BrowserRouter>
            <div className="App">
              <a href="#main-content" className="skip-link">
                Skip to main content
              </a>
              <Navigation />
              <div className="app-container">
                <main id="main-content" className="main-content">
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="/missions" element={<MissionsPage />} />
                    <Route path="/city" element={<CityPage />} />
                    <Route path="/factions" element={<FactionsPage />} />
                    <Route path="/rules" element={<RulesPage />} />
                    <Route path="/saves" element={<SavesPage />} />
                  </Routes>
                </main>
              </div>
            </div>
          </BrowserRouter>
        </GameStateProvider>
      </PasswordProvider>
    </ThemeProvider>
  );
}

export default App;
