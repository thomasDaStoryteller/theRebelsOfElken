const DEFAULT_PASSWORD = "gm";
const PASSWORD_STORAGE_KEY = "campaign-cards-gm-password";
const AUTH_SESSION_KEY = "campaign-cards-gm-authenticated";
const CONFIG_FILE_PATH = "/gm-config.json";

export interface GMConfig {
  defaultPassword?: string;
}

/**
 * Get the stored password from localStorage
 * Returns null if no password is set
 */
export function getStoredPassword(): string | null {
  try {
    const stored = localStorage.getItem(PASSWORD_STORAGE_KEY);
    return stored || null;
  } catch (error) {
    console.warn("Failed to get stored password:", error);
    return null;
  }
}

/**
 * Set a new password in localStorage
 */
export function setPassword(password: string): boolean {
  try {
    localStorage.setItem(PASSWORD_STORAGE_KEY, password);
    return true;
  } catch (error) {
    console.warn("Failed to set password:", error);
    return false;
  }
}

/**
 * Check if a password has been set
 */
export function hasPassword(): boolean {
  return getStoredPassword() !== null;
}

/**
 * Get the effective password (stored or default)
 */
export function getEffectivePassword(): string {
  const stored = getStoredPassword();
  return stored || DEFAULT_PASSWORD;
}

/**
 * Validate a password against stored or default
 */
export function validatePassword(password: string): boolean {
  const effective = getEffectivePassword();
  return password === effective;
}

/**
 * Check if user is authenticated this session
 */
export function isAuthenticated(): boolean {
  try {
    const auth = sessionStorage.getItem(AUTH_SESSION_KEY);
    return auth === "true";
  } catch (error) {
    console.warn("Failed to check authentication:", error);
    return false;
  }
}

/**
 * Set authentication status for this session
 */
export function setAuthenticated(authenticated: boolean): void {
  try {
    if (authenticated) {
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
    } else {
      sessionStorage.removeItem(AUTH_SESSION_KEY);
    }
  } catch (error) {
    console.warn("Failed to set authentication:", error);
  }
}

/**
 * Clear authentication (logout)
 */
export function clearAuthentication(): void {
  setAuthenticated(false);
}

/**
 * Load config from file (optional)
 * Returns config or null if not found/invalid
 */
export async function loadConfig(): Promise<GMConfig | null> {
  try {
    const response = await fetch(CONFIG_FILE_PATH);
    if (!response.ok) {
      return null;
    }
    const config: GMConfig = await response.json();
    return config;
  } catch (error) {
    // Config file not found or invalid - use defaults
    return null;
  }
}

/**
 * Get default password (from config or hardcoded)
 */
export async function getDefaultPassword(): Promise<string> {
  const config = await loadConfig();
  return config?.defaultPassword || DEFAULT_PASSWORD;
}

/**
 * Clear stored password (reset to default)
 */
export function clearPassword(): void {
  try {
    localStorage.removeItem(PASSWORD_STORAGE_KEY);
    clearAuthentication();
  } catch (error) {
    console.warn("Failed to clear password:", error);
  }
}



