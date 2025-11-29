import React from "react";
import { FactionReference } from "../factionData";
import "./FactionCard.css";

interface FactionCardProps {
  faction: FactionReference;
}

export const FactionCard: React.FC<FactionCardProps> = ({ faction }) => {
  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case "Allied":
        return "var(--status-success)";
      case "Hostile":
        return "var(--status-error)";
      case "Neutral":
        return "var(--status-warning)";
      case "Oppressed":
        return "var(--status-info)";
      case "Unknown":
        return "var(--status-neutral)";
      default:
        return "var(--status-neutral)";
    }
  };

  return (
    <div className="faction-card">
      <div className="faction-header">
        <div className="faction-title">
          {faction.icon && (
            <span className="faction-icon" aria-hidden="true">
              {faction.icon}
            </span>
          )}
          <h3 className="faction-name">{faction.name}</h3>
        </div>
        <span
          className="faction-relationship"
          style={{ color: getRelationshipColor(faction.relationship) }}
        >
          {faction.relationship}
        </span>
      </div>
      <p className="faction-description">{faction.description}</p>
    </div>
  );
};

