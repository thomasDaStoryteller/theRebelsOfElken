import React, { useState } from "react";
import { QuestOutcome, Investment, CampaignState } from "../../types";
import { QuestDrawer } from "../QuestDrawer";
import { HistoryPanel } from "../HistoryPanel";
import { PasswordPrompt } from "../PasswordPrompt";
import { PasswordSetup } from "../PasswordSetup";
import { usePassword } from "../../PasswordContext";
import { Eye, EyeOff, Lock } from "lucide-react";
import "./MissionsPage.css";

interface MissionsPageProps {
  state: CampaignState;
  onDrawQuests: () => void;
  onInvestInQuest: (questId: string, investment: Investment) => void;
  onResolveQuest: (questId: string, outcome: QuestOutcome, notes?: string) => void;
}

export const MissionsPage: React.FC<MissionsPageProps> = ({
  state,
  onDrawQuests,
  onInvestInQuest,
  onResolveQuest,
}) => {
  const [isGMView, setIsGMView] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showPasswordSetup, setShowPasswordSetup] = useState(false);
  const { isAuthenticated, hasPasswordSet, authenticate, refreshAuth } =
    usePassword();

  // Get available quests (not completed or discarded)
  const availableQuests = state.deck.filter(
    (quest) =>
      !state.completed.some((completed) => completed.id === quest.id) &&
      !state.discarded?.includes(quest.id)
  );

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
    <div className="missions-page">
      <div className="missions-header">
        <h1>Missions</h1>
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

      <div className="missions-content">
        <QuestDrawer
          availableQuests={availableQuests}
          drawnQuests={state.drawnQuests}
          onDrawQuests={onDrawQuests}
          onInvestInQuest={onInvestInQuest}
          onResolveQuest={onResolveQuest}
          availableResources={state.R}
          isGMView={isGMView && isAuthenticated}
        />

        <HistoryPanel completedQuests={state.completed} />
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

