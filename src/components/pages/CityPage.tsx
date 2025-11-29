import React from "react";
import { Map } from "lucide-react";
import "./CityPage.css";

export const CityPage: React.FC = () => {
  return (
    <div className="city-page">
      <div className="coming-soon">
        <Map className="coming-soon-icon" aria-hidden="true" />
        <h1>City</h1>
        <p>District grid visualization coming soon.</p>
        <p className="coming-soon-subtitle">
          This page will display the city's districts and their current state.
        </p>
      </div>
    </div>
  );
};


