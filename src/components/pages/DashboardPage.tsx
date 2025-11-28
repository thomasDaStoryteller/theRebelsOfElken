import React from "react";
import { Link } from "react-router-dom";
import { CampaignState } from "../../types";
import { GameHeader } from "../GameHeader";
import { History, ScrollText, TrendingUp } from "lucide-react";
import "./DashboardPage.css";

interface DashboardPageProps {
  state: CampaignState;
  onStartTurn: () => void;
  onResetGame: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  state,
  onStartTurn,
  onResetGame,
}) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "succeeded":
        return "✅";
      case "partial":
        return "⚠️";
      case "failed":
        return "❌";
      case "abandoned":
        return "🏃";
      default:
        return "❓";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "succeeded":
        return "#10b981";
      case "partial":
        return "#f59e0b";
      case "failed":
        return "#ef4444";
      case "abandoned":
        return "#6b7280";
      default:
        return "#6b7280";
    }
  };

  // Get quest titles from deck
  const getQuestTitle = (questId: string): string => {
    const quest = state.deck.find((q) => q.id === questId);
    return quest ? quest.title : questId;
  };

  // Recent missions (last 5)
  const recentMissions = [...state.completed]
    .sort((a, b) => b.turnResolved - a.turnResolved)
    .slice(0, 5);

  // Calculate stats
  const totalQuestsCompleted = state.completed.length;
  const succeededCount = state.completed.filter(
    (q) => q.status === "succeeded"
  ).length;
  const availableQuests = state.deck.filter(
    (quest) =>
      !state.completed.some((completed) => completed.id === quest.id) &&
      !state.discarded?.includes(quest.id)
  ).length;

  return (
    <div className="dashboard-page">
      <GameHeader
        state={state}
        onStartTurn={onStartTurn}
        onResetGame={onResetGame}
      />

      <div className="dashboard-widgets">
        <div className="widget stats-widget">
          <div className="widget-header">
            <TrendingUp className="widget-icon" aria-hidden="true" />
            <h3>Campaign Stats</h3>
          </div>
          <div className="widget-content">
            <div className="stat-item">
              <span className="stat-label">Total Quests Completed</span>
              <span className="stat-value">{totalQuestsCompleted}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Successful Quests</span>
              <span className="stat-value success">{succeededCount}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Available Quests</span>
              <span className="stat-value">{availableQuests}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Current Resources</span>
              <span className="stat-value">{state.R}</span>
            </div>
          </div>
        </div>

        <div className="widget recent-missions-widget">
          <div className="widget-header">
            <History className="widget-icon" aria-hidden="true" />
            <h3>Recent Missions</h3>
            <Link to="/missions" className="widget-link">
              View All
            </Link>
          </div>
          <div className="widget-content">
            {recentMissions.length === 0 ? (
              <p className="no-missions">No missions completed yet.</p>
            ) : (
              <div className="recent-missions-list">
                {recentMissions.map((quest, index) => (
                  <div key={index} className="recent-mission-item">
                    <div className="recent-mission-header">
                      <span className="recent-mission-title">
                        {getQuestTitle(quest.id)}
                      </span>
                      <span
                        className="recent-mission-status"
                        style={{ color: getStatusColor(quest.status) }}
                      >
                        {getStatusIcon(quest.status)}
                      </span>
                    </div>
                    <div className="recent-mission-meta">
                      <span className="recent-mission-turn">
                        Turn {quest.turnResolved}
                      </span>
                      {Object.keys(quest.appliedDeltas).length > 0 && (
                        <div className="recent-mission-deltas">
                          {Object.entries(quest.appliedDeltas).map(
                            ([key, value]) => (
                              <span
                                key={key}
                                className={`delta ${
                                  value > 0 ? "positive" : "negative"
                                }`}
                              >
                                {key}: {value > 0 ? "+" : ""}
                                {value}
                              </span>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="widget quick-actions-widget">
          <div className="widget-header">
            <ScrollText className="widget-icon" aria-hidden="true" />
            <h3>Quick Actions</h3>
          </div>
          <div className="widget-content">
            <Link to="/missions" className="quick-action-button">
              <ScrollText className="icon" aria-hidden="true" />
              Go to Missions
            </Link>
            <Link to="/saves" className="quick-action-button">
              <History className="icon" aria-hidden="true" />
              Manage Saves
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

