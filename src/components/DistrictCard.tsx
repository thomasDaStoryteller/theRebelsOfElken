import React, { useState } from "react";
import { DistrictData } from "../districtData";
import { ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import "./DistrictCard.css";

interface DistrictCardProps {
  district: DistrictData;
  isGMView?: boolean;
}

export const DistrictCard: React.FC<DistrictCardProps> = ({
  district,
  isGMView = false,
}) => {
  const [expanded, setExpanded] = useState(false);

  const hasGMInfo = isGMView && (district.gmNotes || district.gmSecrets);

  return (
    <div className="district-card">
      <div className="district-header">
        <div className="district-title">
          {district.icon && (
            <span className="district-icon" aria-hidden="true">
              {district.icon}
            </span>
          )}
          <div className="district-name-block">
            <h3 className="district-name">{district.name}</h3>
            <p className="district-tagline">{district.tagline}</p>
          </div>
        </div>
      </div>

      <div className="district-description">
        {district.description.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="district-section">
        <h4 className="district-section-title">
          <MapPin className="district-section-icon" aria-hidden="true" />
          Key Locations
        </h4>
        <ul className="district-locations">
          {district.locations.map((loc, i) => (
            <li key={i} className="district-location-item">
              <span className="district-location-name">{loc.name}</span>
              <p className="district-location-desc">{loc.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="district-section">
        <h4 className="district-section-title">
          <Users className="district-section-icon" aria-hidden="true" />
          Notable NPCs
        </h4>
        <ul className="district-npcs">
          {district.npcs.map((npc, i) => (
            <li key={i} className="district-npc-item">
              <div className="district-npc-header">
                <span className="district-npc-name">{npc.name}</span>
                <span className="district-npc-role">{npc.role}</span>
              </div>
              <p className="district-npc-desc">{npc.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {hasGMInfo && (
        <>
          <button
            className="district-expand-button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded ? <ChevronUp /> : <ChevronDown />}
            {expanded ? "Hide" : "Show"} GM Details
          </button>

          {expanded && (
            <div className="district-gm-details">
              {district.gmNotes && (
                <div className="district-gm-section">
                  <h4 className="district-gm-section-title">GM Notes</h4>
                  <p className="district-gm-text">{district.gmNotes}</p>
                </div>
              )}
              {district.gmSecrets && (
                <div className="district-gm-section">
                  <h4 className="district-gm-section-title">Secrets</h4>
                  <p className="district-gm-text">{district.gmSecrets}</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
