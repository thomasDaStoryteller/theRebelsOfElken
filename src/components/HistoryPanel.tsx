import React, { useState } from "react";
import { QuestState } from "../types";
import { History, ChevronDown, ChevronUp } from "lucide-react";

interface HistoryPanelProps {
  completedQuests: QuestState[];
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  completedQuests,
}) => {
  const [expanded, setExpanded] = useState(false);

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

  return (
    <div className="history-panel">
      <div className="history-header" onClick={() => setExpanded(!expanded)}>
        <div className="history-title">
          <History className="icon" />
          <span>Quest History ({completedQuests.length})</span>
        </div>
        {expanded ? <ChevronUp /> : <ChevronDown />}
      </div>

      {expanded && (
        <div className="history-content">
          {completedQuests.length === 0 ? (
            <p className="no-history">No quests completed yet.</p>
          ) : (
            <div className="history-list">
              {completedQuests
                .sort((a, b) => b.turnResolved - a.turnResolved)
                .map((quest, index) => (
                  <div key={index} className="history-item">
                    <div className="history-item-header">
                      <div className="quest-info">
                        <span className="quest-id">{quest.id}</span>
                        <span className="quest-turn">
                          Turn {quest.turnResolved}
                        </span>
                      </div>
                      <div
                        className="quest-status"
                        style={{ color: getStatusColor(quest.status) }}
                      >
                        {getStatusIcon(quest.status)} {quest.status}
                      </div>
                    </div>

                    {Object.keys(quest.appliedDeltas).length > 0 && (
                      <div className="applied-deltas">
                        <span className="deltas-label">Effects:</span>
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

                    {quest.notes && (
                      <div className="quest-notes">
                        <strong>Notes:</strong> {quest.notes}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


