import React, { useState } from "react";
import { Users, Eye, EyeOff, Lock } from "lucide-react";
import { FactionCard } from "../FactionCard";
import { PasswordPrompt } from "../PasswordPrompt";
import { PasswordSetup } from "../PasswordSetup";
import { usePassword } from "../../PasswordContext";
import { factionData } from "../../factionData";
import "./FactionsPage.css";

export const FactionsPage: React.FC = () => {
  const [isGMView, setIsGMView] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showPasswordSetup, setShowPasswordSetup] = useState(false);
  const { isAuthenticated, hasPasswordSet, authenticate, refreshAuth } =
    usePassword();

  const handleGMViewToggle = () => {
    // If already in GM view, just toggle off
    if (isGMView) {
      setIsGMView(false);
      return;
    }

    // If not authenticated, check if password is set
    if (!isAuthenticated) {
      if (!hasPasswordSet) {
        // First time - show setup
        setShowPasswordSetup(true);
      } else {
        // Show password prompt
        setShowPasswordPrompt(true);
      }
      return;
    }

    // Authenticated - allow toggle
    setIsGMView(true);
  };

  const handlePasswordSuccess = () => {
    authenticate();
    refreshAuth();
    setIsGMView(true);
  };

  const handlePasswordSetupSuccess = () => {
    authenticate();
    refreshAuth();
    setIsGMView(true);
  };

  // If GM view is active but not authenticated, force back to player view
  React.useEffect(() => {
    if (isGMView && !isAuthenticated) {
      setIsGMView(false);
    }
  }, [isGMView, isAuthenticated]);

  return (
    <div className="factions-page">
      <div className="factions-header">
        <Users className="factions-header-icon" aria-hidden="true" />
        <div className="factions-header-content">
          <div className="factions-title-section">
            <h1>Factions</h1>
            <p className="factions-description">
              Reference guide to the major factions and organizations in the
              city. These brief descriptions help track relationships and
              understand the political landscape.
            </p>
          </div>
          <div className="view-toggle">
            <button
              className={`view-button ${isGMView ? "active" : ""} ${
                !isAuthenticated ? "locked" : ""
              }`}
              onClick={handleGMViewToggle}
              aria-label={`Switch to ${isGMView ? "Player" : "GM"} view`}
              aria-pressed={isGMView}
              disabled={!isAuthenticated && isGMView}
            >
              {!isAuthenticated && !isGMView ? (
                <Lock className="icon" aria-hidden="true" />
              ) : isGMView ? (
                <EyeOff className="icon" aria-hidden="true" />
              ) : (
                <Eye className="icon" aria-hidden="true" />
              )}
              {isGMView ? "Player View" : "GM View"}
              {!isAuthenticated && !isGMView && (
                <span className="lock-indicator">(Locked)</span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="factions-grid">
        {factionData
          .filter(
            (faction) =>
              isGMView && isAuthenticated || faction.id !== "intellect-devourer-cabal"
          )
          .map((faction) => (
            <FactionCard
              key={faction.id}
              faction={faction}
              isGMView={isGMView && isAuthenticated}
            />
          ))}
      </div>

      <PasswordPrompt
        isOpen={showPasswordPrompt}
        onClose={() => setShowPasswordPrompt(false)}
        onSuccess={handlePasswordSuccess}
      />

      <PasswordSetup
        isOpen={showPasswordSetup}
        onClose={() => setShowPasswordSetup(false)}
        onSuccess={handlePasswordSetupSuccess}
      />
    </div>
  );
};



