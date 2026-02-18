import React, { useState } from "react";
import { MemoryManager } from "../MemoryManager";
import { PasswordChange } from "../PasswordChange";
import { usePassword } from "../../PasswordContext";
import { useGameState } from "../../GameStateContext";
import { Lock, Unlock } from "lucide-react";
import "./SavesPage.css";

export const SavesPage: React.FC = () => {
  const { saveGame, loadGame, deleteSave } = useGameState();
  const { isAuthenticated, logout } = usePassword();
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  return (
    <div className="saves-page">
      <div className="saves-header">
        <h1>Save & Load Games</h1>
        <p>Manage your campaign saves and continue from where you left off.</p>
      </div>
      <div className="saves-content">
        <MemoryManager
          onSaveGame={saveGame}
          onLoadGame={loadGame}
          onDeleteSave={deleteSave}
        />

        <div className="password-management-section">
          <div className="password-management-header">
            <h2>
              <Lock className="icon" aria-hidden="true" />
              GM View Password
            </h2>
            {isAuthenticated && (
              <span className="auth-status authenticated">
                <Unlock className="icon" aria-hidden="true" />
                Authenticated
              </span>
            )}
          </div>
          <p className="password-management-description">
            Manage the password that protects GM view access. This is for
            convenience only and is not secure against determined users.
          </p>
          <div className="password-management-actions">
            <button
              className="password-management-button"
              onClick={() => setShowPasswordChange(true)}
            >
              Change Password
            </button>
            {isAuthenticated && (
              <button
                className="password-management-button secondary"
                onClick={logout}
              >
                Logout from GM View
              </button>
            )}
          </div>
        </div>
      </div>

      <PasswordChange
        isOpen={showPasswordChange}
        onClose={() => setShowPasswordChange(false)}
      />
    </div>
  );
};

