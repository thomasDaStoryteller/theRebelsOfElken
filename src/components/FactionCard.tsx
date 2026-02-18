import React, { useState } from "react";
import { FactionReference } from "../factionData";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./FactionCard.css";

interface FactionCardProps {
  faction: FactionReference;
  isGMView?: boolean;
}

export const FactionCard: React.FC<FactionCardProps> = ({
  faction,
  isGMView = false,
}) => {
  const [expanded, setExpanded] = useState(false);

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

  const hasGMInfo =
    isGMView &&
    (faction.gmNotes || faction.internalStructure || faction.secrets);

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
      <div className="faction-description">
        {faction.description.map((section, index) => (
          <div key={index} className="faction-description-section">
            <h4 className="faction-section-title">{section.title}</h4>
            <p className="faction-section-content">{section.content}</p>
          </div>
        ))}
      </div>

      {hasGMInfo && (
        <>
          <button
            className="faction-expand-button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp /> : <ChevronDown />}
            {expanded ? "Hide" : "Show"} GM Details
          </button>

          {expanded && (
            <div className="faction-gm-details">
              {faction.gmNotes && faction.gmNotes.length > 0 && (
                <div className="faction-gm-section">
                  <h4 className="faction-gm-section-title">GM Notes</h4>
                  {faction.gmNotes.map((section, index) => (
                    <div key={index} className="faction-gm-subsection">
                      <h5 className="faction-gm-subsection-title">
                        {section.title}
                      </h5>
                      <p className="faction-gm-text">{section.content}</p>
                    </div>
                  ))}
                </div>
              )}

              {faction.internalStructure &&
                faction.internalStructure.length > 0 && (
                  <div className="faction-gm-section">
                    <h4 className="faction-gm-section-title">Internal Structure</h4>
                    {faction.internalStructure.map((section, index) => (
                      <div key={index} className="faction-gm-subsection">
                        <h5 className="faction-gm-subsection-title">
                          {section.title}
                        </h5>
                        <p className="faction-gm-text">{section.content}</p>
                      </div>
                    ))}
                  </div>
                )}

              {faction.secrets && faction.secrets.length > 0 && (
                <div className="faction-gm-section">
                  <h4 className="faction-gm-section-title">Secrets</h4>
                  {faction.secrets.map((section, index) => (
                    <div key={index} className="faction-gm-subsection">
                      <h5 className="faction-gm-subsection-title">
                        {section.title}
                      </h5>
                      <p className="faction-gm-text">{section.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

