import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  isAuthenticated as checkAuth,
  hasPassword,
  setAuthenticated,
  clearAuthentication,
} from "./config/gmPassword";

interface PasswordContextType {
  isAuthenticated: boolean;
  hasPasswordSet: boolean;
  authenticate: () => void;
  logout: () => void;
  refreshAuth: () => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(
  undefined
);

interface PasswordProviderProps {
  children: ReactNode;
}

export const PasswordProvider: React.FC<PasswordProviderProps> = ({
  children,
}) => {
  const [authenticated, setAuthenticatedState] = useState(checkAuth());
  const [passwordSet, setPasswordSet] = useState(hasPassword());

  const refreshAuth = () => {
    setAuthenticatedState(checkAuth());
    setPasswordSet(hasPassword());
  };

  const authenticate = () => {
    setAuthenticated(true);
    setAuthenticatedState(true);
  };

  const logout = () => {
    clearAuthentication();
    setAuthenticatedState(false);
  };

  // Check auth status on mount and when storage changes
  useEffect(() => {
    refreshAuth();

    // Listen for storage changes (e.g., from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "campaign-cards-gm-authenticated" ||
        e.key === "campaign-cards-gm-password"
      ) {
        refreshAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const value: PasswordContextType = {
    isAuthenticated: authenticated,
    hasPasswordSet: passwordSet,
    authenticate,
    logout,
    refreshAuth,
  };

  return (
    <PasswordContext.Provider value={value}>{children}</PasswordContext.Provider>
  );
};

export const usePassword = (): PasswordContextType => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error("usePassword must be used within a PasswordProvider");
  }
  return context;
};

