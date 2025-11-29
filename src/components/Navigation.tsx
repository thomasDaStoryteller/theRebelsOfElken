import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, ScrollText, Map, Users, BookOpen, Save } from "lucide-react";
import { ThemeSelector } from "./ThemeSelector";
import "./Navigation.css";

export const Navigation: React.FC = () => {
  return (
    <nav className="navigation" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Campaign Cards</h2>
        </div>
        
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              aria-current="page"
            >
              <LayoutDashboard className="nav-icon" aria-hidden="true" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/missions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <ScrollText className="nav-icon" aria-hidden="true" />
              <span>Missions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/city"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Map className="nav-icon" aria-hidden="true" />
              <span>City</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/factions"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Users className="nav-icon" aria-hidden="true" />
              <span>Factions</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rules"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <BookOpen className="nav-icon" aria-hidden="true" />
              <span>Rules</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saves"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Save className="nav-icon" aria-hidden="true" />
              <span>Saves</span>
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeSelector />
        </div>
      </div>
    </nav>
  );
};



