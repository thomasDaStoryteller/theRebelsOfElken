import React from "react";
import { Users } from "lucide-react";
import { FactionCard } from "../FactionCard";
import { factionData } from "../../factionData";
import "./FactionsPage.css";

export const FactionsPage: React.FC = () => {
  return (
    <div className="factions-page">
      <div className="factions-header">
        <Users className="factions-header-icon" aria-hidden="true" />
        <div>
          <h1>Factions</h1>
          <p className="factions-description">
            Reference guide to the major factions and organizations in the
            city. These brief descriptions help track relationships and
            understand the political landscape.
          </p>
        </div>
      </div>

      <div className="factions-grid">
        {factionData.map((faction) => (
          <FactionCard key={faction.id} faction={faction} />
        ))}
      </div>
    </div>
  );
};



