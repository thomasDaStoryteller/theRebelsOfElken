import React, { useState } from "react";
import { Quest, Investment, QuestOutcome } from "../types";
import { usePassword } from "../PasswordContext";
import { ChevronDown, ChevronUp, Coins, Users, Eye, Heart } from "lucide-react";

interface QuestCardProps {
  quest: Quest;
  isGMView?: boolean;
  onInvest?: (investment: Investment) => void;
  onResolve?: (outcome: QuestOutcome, notes?: string) => void;
  availableResources?: number;
  isResolving?: boolean;
}

export const QuestCard: React.FC<QuestCardProps> = ({
  quest,
  isGMView = false,
  onInvest,
  onResolve,
  availableResources = 0,
  isResolving = false,
}) => {
  const { isAuthenticated } = usePassword();
  const [expanded, setExpanded] = useState(false);
  
  // Only show GM details if authenticated
  const canShowGMDetails = isGMView && isAuthenticated;
  const [investmentsExpanded, setInvestmentsExpanded] = useState(false);
  const [selectedInvestments, setSelectedInvestments] = useState<Investment[]>(
    []
  );
  const [notes, setNotes] = useState("");

  const handleInvestmentToggle = (investment: Investment) => {
    if (selectedInvestments.some((inv) => inv.label === investment.label)) {
      setSelectedInvestments((prev) =>
        prev.filter((inv) => inv.label !== investment.label)
      );
    } else {
      setSelectedInvestments((prev) => [...prev, investment]);
    }
  };

  const handleInvest = () => {
    selectedInvestments.forEach((investment) => {
      onInvest?.(investment);
    });
    setSelectedInvestments([]);
  };

  const totalInvestmentCost = selectedInvestments.reduce(
    (sum, inv) => sum + inv.costR,
    0
  );
  const canAfford = availableResources >= quest.costR + totalInvestmentCost;

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Smuggling":
        return "var(--color-forest)";
      case "Propaganda":
        return "var(--color-bronze)";
      case "Unity":
        return "var(--color-cream)";
      case "Secrecy":
        return "var(--color-slate)";
      case "Resources":
        return "var(--color-rust)";
      case "Special":
        return "var(--color-bronze)";
      default:
        return "var(--color-slate)";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Smuggling":
        return "📦";
      case "Propaganda":
        return "📢";
      case "Unity":
        return "🤝";
      case "Secrecy":
        return "🕵️";
      case "Resources":
        return "⚡";
      case "Special":
        return "⭐";
      default:
        return "❓";
    }
  };

  return (
    <div
      className="quest-card"
      style={
        {
          "--quest-category-color": getCategoryColor(quest.category),
        } as React.CSSProperties
      }
    >
      <div className="quest-header">
        <div className="quest-title-section">
          <div
            className="quest-category"
            style={{ backgroundColor: getCategoryColor(quest.category) }}
          >
            {getCategoryIcon(quest.category)} {quest.category}
          </div>
          <h3 className="quest-title">{quest.title}</h3>
        </div>
        <div className="quest-cost">
          <Coins className="icon" />
          {quest.costR}
        </div>
      </div>

      <div className="quest-hook">{quest.hook}</div>

      {canShowGMDetails && (
        <button
          className="expand-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <ChevronUp /> : <ChevronDown />}
          {expanded ? "Hide" : "Show"} GM Details
        </button>
      )}

      {expanded && canShowGMDetails && (
        <div className="quest-gm-details">
          <div className="quest-effects">
            <div className="effect-section">
              <h4>Success Effects:</h4>
              <div className="effect-deltas">
                {Object.entries(quest.success).map(([key, value]) => (
                  <span
                    key={key}
                    className={`delta ${value > 0 ? "positive" : "negative"}`}
                  >
                    {key}: {value > 0 ? "+" : ""}
                    {value}
                  </span>
                ))}
              </div>
            </div>
            <div className="effect-section">
              <h4>Failure Effects:</h4>
              <div className="effect-deltas">
                {Object.entries(quest.failure).map(([key, value]) => (
                  <span
                    key={key}
                    className={`delta ${value > 0 ? "positive" : "negative"}`}
                  >
                    {key}: {value > 0 ? "+" : ""}
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="quest-complications">
            <h4>Complications:</h4>
            <ul>
              {quest.complications.map((complication, index) => (
                <li key={index}>{complication}</li>
              ))}
            </ul>
          </div>

          <div className="quest-ties">
            <h4>Faction Ties:</h4>
            <div className="ties-list">
              {quest.ties.map((tie, index) => (
                <span key={index} className="tie-tag">
                  {tie}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {quest.optionalInvestments.length > 0 && (
        <div className="quest-investments">
          <button
            className="investments-disclosure-header"
            onClick={() => setInvestmentsExpanded(!investmentsExpanded)}
            aria-expanded={investmentsExpanded}
            aria-controls="investments-content"
          >
            <span>Pre-Mission Investments</span>
            <ChevronDown
              className={`disclosure-icon ${
                investmentsExpanded ? "expanded" : ""
              }`}
              aria-hidden="true"
            />
          </button>

          {investmentsExpanded && (
            <div id="investments-content" className="investment-options">
              {quest.optionalInvestments.map((investment, index) => (
                <label key={index} className="investment-option">
                  <input
                    type="checkbox"
                    checked={selectedInvestments.some(
                      (inv) => inv.label === investment.label
                    )}
                    onChange={() => handleInvestmentToggle(investment)}
                    disabled={!canAfford}
                  />
                  <div className="investment-details">
                    <div className="investment-header">
                      <span className="investment-label">
                        {investment.label}
                      </span>
                      <span className="investment-cost">
                        <Coins className="icon" />
                        {investment.costR}
                      </span>
                    </div>
                    {investment.ruleText && (
                      <div className="investment-rule">
                        {investment.ruleText}
                      </div>
                    )}
                    {investment.effectOnSuccess && (
                      <div className="investment-effect">
                        On success:{" "}
                        {Object.entries(investment.effectOnSuccess).map(
                          ([key, value]) => (
                            <span key={key} className="delta positive">
                              {key}: +{value}
                            </span>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </label>
              ))}

              {selectedInvestments.length > 0 && (
                <button
                  className="invest-button"
                  onClick={handleInvest}
                  disabled={!canAfford}
                >
                  Invest {totalInvestmentCost} Resources
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {isResolving && (
        <div className="quest-resolution">
          <h4>Resolve Quest:</h4>
          <div className="resolution-options">
            <button
              className="resolve-button success"
              onClick={() => onResolve?.("succeeded", notes)}
            >
              ✅ Succeeded
            </button>
            <button
              className="resolve-button partial"
              onClick={() => onResolve?.("partial", notes)}
            >
              ⚠️ Partial
            </button>
            <button
              className="resolve-button failure"
              onClick={() => onResolve?.("failed", notes)}
            >
              ❌ Failed
            </button>
            <button
              className="resolve-button abandoned"
              onClick={() => onResolve?.("abandoned", notes)}
            >
              🏃 Abandoned
            </button>
          </div>
          <textarea
            className="resolution-notes"
            placeholder="Add notes about the resolution..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};
