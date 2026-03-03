import React, { useState } from "react";
import { Map, Eye, EyeOff, Lock } from "lucide-react";
import { DistrictCard } from "../DistrictCard";
import { PasswordPrompt } from "../PasswordPrompt";
import { PasswordSetup } from "../PasswordSetup";
import { usePassword } from "../../PasswordContext";
import { districtData } from "../../districtData";
import "./CityPage.css";

export const CityPage: React.FC = () => {
  const [isGMView, setIsGMView] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showPasswordSetup, setShowPasswordSetup] = useState(false);
  const { isAuthenticated, hasPasswordSet, authenticate, refreshAuth } =
    usePassword();

  const handleGMViewToggle = () => {
    if (isGMView) {
      setIsGMView(false);
      return;
    }
    if (!isAuthenticated) {
      if (!hasPasswordSet) {
        setShowPasswordSetup(true);
      } else {
        setShowPasswordPrompt(true);
      }
      return;
    }
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

  React.useEffect(() => {
    if (isGMView && !isAuthenticated) {
      setIsGMView(false);
    }
  }, [isGMView, isAuthenticated]);

  return (
    <div className="city-page">
      <div className="city-header">
        <Map className="city-header-icon" aria-hidden="true" />
        <div className="city-header-content">
          <div className="city-title-section">
            <h1>City Districts</h1>
            <p className="city-description">
              A reference guide to the five districts of the city — their
              character, key locations, and notable inhabitants.
            </p>
          </div>
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
      </div>

      <div className="districts-grid">
        {districtData.map((district) => (
          <DistrictCard
            key={district.id}
            district={district}
            isGMView={isGMView && isAuthenticated}
          />
        ))}
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
