export type ThemeName =
  | "warm"
  | "redGreenColorblind"
  | "blueYellowColorblind"
  | "monochromatic";

export interface Theme {
  name: ThemeName;
  displayName: string;
  description: string;
  colors: {
    // Base colors
    cream: string;
    bronze: string;
    rust: string;
    forest: string;
    slate: string;

    // Background colors
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    bgCard: string;
    bgGlass: string;

    // Text colors
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;

    // Border colors
    borderPrimary: string;
    borderSecondary: string;
    borderFocus: string;

    // Metric colors
    metricHope: string;
    metricSecrecy: string;
    metricUnity: string;
    metricOppression: string;
    metricResources: string;

    // Status colors
    statusSuccess: string;
    statusWarning: string;
    statusError: string;
    statusInfo: string;
    statusNeutral: string;
  };
}

export const themes: Record<ThemeName, Theme> = {
  warm: {
    name: "warm",
    displayName: "Warm",
    description: "The original warm theme with earthy tones",
    colors: {
      cream: "#dbca9a",
      bronze: "#c08b51",
      rust: "#a7623c",
      forest: "#34544f",
      slate: "#786f5d",

      bgPrimary: "linear-gradient(135deg, #34544f 0%, #786f5d 100%)",
      bgSecondary: "rgba(219, 202, 154, 0.95)",
      bgTertiary: "rgba(219, 202, 154, 0.3)",
      bgCard: "#ffffff",
      bgGlass: "rgba(219, 202, 154, 0.1)",

      textPrimary: "#2d1b1b",
      textSecondary: "#4a3a2a",
      textMuted: "#6b5b4b",
      textInverse: "#ffffff",

      borderPrimary: "rgba(52, 84, 79, 0.2)",
      borderSecondary: "rgba(192, 139, 81, 0.3)",
      borderFocus: "#a7623c",

      metricHope: "#dbca9a",
      metricSecrecy: "#786f5d",
      metricUnity: "#c08b51",
      metricOppression: "#a7623c",
      metricResources: "#34544f",

      statusSuccess: "#34544f",
      statusWarning: "#c08b51",
      statusError: "#a7623c",
      statusInfo: "#786f5d",
      statusNeutral: "#786f5d",
    },
  },

  redGreenColorblind: {
    name: "redGreenColorblind",
    displayName: "Red-Green Colorblind",
    description:
      "Brassy golds, deep browns, and aged grays for red-green colorblind accessibility",
    colors: {
      cream: "#d4af37", // Brassy gold
      bronze: "#b8860b", // Dark goldenrod
      rust: "#8b4513", // Saddle brown
      forest: "#2f4f4f", // Dark slate gray
      slate: "#696969", // Dim gray

      bgPrimary: "linear-gradient(135deg, #2f4f4f 0%, #696969 100%)",
      bgSecondary: "rgba(212, 175, 55, 0.95)",
      bgTertiary: "rgba(212, 175, 55, 0.3)",
      bgCard: "#ffffff",
      bgGlass: "rgba(212, 175, 55, 0.1)",

      textPrimary: "#2f2f2f",
      textSecondary: "#4a4a4a",
      textMuted: "#6b6b6b",
      textInverse: "#ffffff",

      borderPrimary: "rgba(47, 79, 79, 0.2)",
      borderSecondary: "rgba(184, 134, 11, 0.3)",
      borderFocus: "#8b4513",

      metricHope: "#d4af37",
      metricSecrecy: "#696969",
      metricUnity: "#b8860b",
      metricOppression: "#8b4513",
      metricResources: "#2f4f4f",

      statusSuccess: "#2f4f4f",
      statusWarning: "#b8860b",
      statusError: "#8b4513",
      statusInfo: "#696969",
      statusNeutral: "#696969",
    },
  },

  blueYellowColorblind: {
    name: "blueYellowColorblind",
    displayName: "Blue-Yellow Colorblind",
    description:
      "Warm browns, coppers, brass, grays, and deep blues for blue-yellow colorblind accessibility",
    colors: {
      cream: "#cd853f", // Peru (warm brown)
      bronze: "#b87333", // Dark goldenrod
      rust: "#8b4513", // Saddle brown
      forest: "#191970", // Midnight blue
      slate: "#708090", // Slate gray

      bgPrimary: "linear-gradient(135deg, #191970 0%, #708090 100%)",
      bgSecondary: "rgba(205, 133, 63, 0.95)",
      bgTertiary: "rgba(205, 133, 63, 0.3)",
      bgCard: "#ffffff",
      bgGlass: "rgba(205, 133, 63, 0.1)",

      textPrimary: "#2f2f2f",
      textSecondary: "#4a4a4a",
      textMuted: "#6b6b6b",
      textInverse: "#ffffff",

      borderPrimary: "rgba(25, 25, 112, 0.2)",
      borderSecondary: "rgba(184, 115, 51, 0.3)",
      borderFocus: "#8b4513",

      metricHope: "#cd853f",
      metricSecrecy: "#708090",
      metricUnity: "#b87333",
      metricOppression: "#8b4513",
      metricResources: "#191970",

      statusSuccess: "#191970",
      statusWarning: "#b87333",
      statusError: "#8b4513",
      statusInfo: "#708090",
      statusNeutral: "#708090",
    },
  },

  monochromatic: {
    name: "monochromatic",
    displayName: "Monochromatic",
    description:
      "Variations of a single rich, earthy sepia-toned brown for maximum contrast",
    colors: {
      cream: "#d2b48c", // Tan
      bronze: "#a0522d", // Sienna
      rust: "#8b4513", // Saddle brown
      forest: "#654321", // Dark brown
      slate: "#8b7355", // Light brown

      bgPrimary: "linear-gradient(135deg, #654321 0%, #8b7355 100%)",
      bgSecondary: "rgba(210, 180, 140, 0.95)",
      bgTertiary: "rgba(210, 180, 140, 0.3)",
      bgCard: "#ffffff",
      bgGlass: "rgba(210, 180, 140, 0.1)",

      textPrimary: "#2f2f2f",
      textSecondary: "#4a4a4a",
      textMuted: "#6b6b6b",
      textInverse: "#ffffff",

      borderPrimary: "rgba(101, 67, 33, 0.2)",
      borderSecondary: "rgba(160, 82, 45, 0.3)",
      borderFocus: "#8b4513",

      metricHope: "#d2b48c",
      metricSecrecy: "#8b7355",
      metricUnity: "#a0522d",
      metricOppression: "#8b4513",
      metricResources: "#654321",

      statusSuccess: "#654321",
      statusWarning: "#a0522d",
      statusError: "#8b4513",
      statusInfo: "#8b7355",
      statusNeutral: "#8b7355",
    },
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  return themes[themeName];
};

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement;

  // Apply CSS custom properties
  Object.entries(theme.colors).forEach(([key, value]) => {
    const cssVarName = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
    root.style.setProperty(cssVarName, value);
  });
};

export const getStoredTheme = (): ThemeName => {
  const stored = localStorage.getItem("theme");
  if (stored && stored in themes) {
    return stored as ThemeName;
  }
  return "warm"; // Default theme
};

export const storeTheme = (themeName: ThemeName) => {
  localStorage.setItem("theme", themeName);
};

