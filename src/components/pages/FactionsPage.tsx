import React from "react";
import { Users } from "lucide-react";
import "./FactionsPage.css";

export const FactionsPage: React.FC = () => {
  return (
    <div className="factions-page">
      <div className="coming-soon">
        <Users className="coming-soon-icon" aria-hidden="true" />
        <h1>Factions</h1>
        <p>Faction cards and relationships coming soon.</p>
        <p className="coming-soon-subtitle">
          This page will display all factions, their relationships, and current standing.
        </p>
      </div>
    </div>
  );
};


