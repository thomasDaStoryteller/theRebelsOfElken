import React, { useState } from "react";
import { Palette, ChevronDown, ChevronUp, Check } from "lucide-react";
import { useTheme } from "../ThemeContext";
import { ThemeName, themes } from "../theme";

export const ThemeSelector: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (themeName: ThemeName) => {
    setTheme(themeName);
    setIsOpen(false);
  };

  const currentThemeData = themes[currentTheme];

  return (
    <div className="theme-selector">
      <button
        className="theme-selector-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Select theme"
        title="Select theme"
      >
        <Palette className="icon" aria-hidden="true" />
        <span className="theme-name">{currentThemeData.displayName}</span>
        {isOpen ? (
          <ChevronUp className="chevron" aria-hidden="true" />
        ) : (
          <ChevronDown className="chevron" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="theme-selector-dropdown" role="listbox">
          <div className="theme-selector-header">
            <h4>Choose Theme</h4>
            <p>Select a theme that works best for your needs</p>
          </div>

          <div className="theme-options">
            {Object.values(themes).map((theme) => (
              <button
                key={theme.name}
                className={`theme-option ${
                  currentTheme === theme.name ? "selected" : ""
                }`}
                onClick={() => handleThemeChange(theme.name)}
                role="option"
                aria-selected={currentTheme === theme.name}
                title={theme.description}
              >
                <div className="theme-preview">
                  <div
                    className="theme-preview-color"
                    style={{ backgroundColor: theme.colors.cream }}
                    title="Cream"
                  />
                  <div
                    className="theme-preview-color"
                    style={{ backgroundColor: theme.colors.bronze }}
                    title="Bronze"
                  />
                  <div
                    className="theme-preview-color"
                    style={{ backgroundColor: theme.colors.rust }}
                    title="Rust"
                  />
                  <div
                    className="theme-preview-color"
                    style={{ backgroundColor: theme.colors.forest }}
                    title="Forest"
                  />
                  <div
                    className="theme-preview-color"
                    style={{ backgroundColor: theme.colors.slate }}
                    title="Slate"
                  />
                </div>

                <div className="theme-info">
                  <div className="theme-name">{theme.displayName}</div>
                  <div className="theme-description">{theme.description}</div>
                </div>

                {currentTheme === theme.name && (
                  <Check className="check-icon" aria-hidden="true" />
                )}
              </button>
            ))}
          </div>

          <div className="theme-selector-footer">
            <p className="accessibility-note">
              Themes are designed for accessibility and colorblind support
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

