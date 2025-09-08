import React from "react";
import { CampaignState } from "../types";
import { MetricBar } from "./MetricBar";
import { Play, RotateCcw } from "lucide-react";

interface GameHeaderProps {
  state: CampaignState;
  onStartTurn: () => void;
  onResetGame: () => void;
}

export const GameHeader: React.FC<GameHeaderProps> = ({
  state,
  onStartTurn,
  onResetGame,
}) => {
  return (
    <div className="game-header">
      <div className="header-top">
        <div className="game-title">
          <h1>Campaign Cards</h1>
          <div className="turn-counter">Turn {state.turn}</div>
        </div>
        <div className="header-actions">
          <button className="action-button primary" onClick={onStartTurn}>
            <Play className="icon" />
            Start Turn
          </button>
          <button className="action-button secondary" onClick={onResetGame}>
            <RotateCcw className="icon" />
            Reset Game
          </button>
        </div>
      </div>

      <div className="metrics-grid">
        <MetricBar
          label="Hope"
          value={state.H}
          max={100}
          color="var(--color-cream)"
          icon="💚"
        />
        <MetricBar
          label="Secrecy"
          value={state.S}
          max={100}
          color="var(--color-slate)"
          icon="🕵️"
        />
        <MetricBar
          label="Unity"
          value={state.U}
          max={100}
          color="var(--color-bronze)"
          icon="🤝"
        />
        <MetricBar
          label="Oppression"
          value={state.O}
          max={10}
          color="var(--color-rust)"
          icon="⚔️"
        />
      </div>

      <div className="resources-section">
        <div className="resources-display">
          <span className="resources-label">Resources:</span>
          <span className="resources-value">{state.R}</span>
        </div>
      </div>
    </div>
  );
};
