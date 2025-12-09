import { defaultDarkModeOverride, Theme } from "@aws-amplify/ui-react";

export const appTheme: Theme = {
  name: "app-theme",
  overrides: [defaultDarkModeOverride],
  tokens: {
    fonts: {
      default: {
        variable: { value: "var(--font-jetbrains-mono)" },
        static: { value: "var(--font-jetbrains-mono)" },
      },
    },
    space: {
      xxs: { value: "0.125rem" },
      xs: { value: "0.25rem" },
      sm: { value: "0.5rem" },
      md: { value: "0.75rem" },
      lg: { value: "1rem" },
      xl: { value: "1.5rem" },
      xxl: { value: "2rem" },
    },
    radii: {
      sm: { value: "0.25rem" },
      md: { value: "0.5rem" },
      lg: { value: "0.75rem" },
    },
    shadows: {
      sm: { value: "0 1px 2px rgba(0,0,0,0.08)" },
      md: { value: "0 4px 16px rgba(0,0,0,0.12)" },
      lg: { value: "0 8px 28px rgba(0,0,0,0.16)" },
    },
  },
};
