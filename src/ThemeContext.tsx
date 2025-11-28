import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  ThemeName,
  Theme,
  getTheme,
  applyTheme,
  getStoredTheme,
  storeTheme,
} from "./theme";

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>(getStoredTheme);
  const theme = getTheme(currentTheme);

  useEffect(() => {
    // Apply the theme when it changes
    applyTheme(theme);

    // Store the theme preference
    storeTheme(currentTheme);
  }, [currentTheme, theme]);

  const setTheme = (themeName: ThemeName) => {
    setCurrentTheme(themeName);
  };

  const value: ThemeContextType = {
    currentTheme,
    setTheme,
    theme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

