import { Theme } from "types";

export const sharedTokens = {
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: {
      small: "0.75em",
      normal: "0.875em",
      medium: "1em",
      large: "1.25em",
      xlarge: "1.5em",
      xxlarge: "2em",
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      small: "1.5",
      normal: "1.6",
      medium: "1.75",
      large: "2",
    },
  },
  breakpoints: {
    xs: "480px",
    sm: "768px",
    md: "1024px",
    lg: "1200px",
    xl: "1440px",
  },
  spacing: {
    none: "0px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  borders: {
    sizes: {
      thin: "1px",
      medium: "2px",
      thick: "4px",
    },
    radius: {
      small: "4px",
      medium: "8px",
      large: "16px",
      round: "50%",
    },
  },
};

export const lightTheme: Theme = {
  colors: {
    primary: "#534B62",
    primaryDark: "#3D3A4A",
    secondary: "#A499B3",
    secondaryDark: "#8F8C9D",
    accent: "#1B1725",
    accentLight: "#4A3F5C",
    background: "#F5F5F5",
    modalBackground: "rgba(0, 0, 0, 0.2)",
    surface: "#FFFFFF",
    error: "#D32F2F",
    warning: "#FFA000",
    info: "#1976D2",
    success: "#388E3C",
    textPrimary: "#212121",
    textSecondary: "#757575",
    textDisabled: "#BDBDBD",
    textDark: "black",
    border: "#E0E0E0",
  },
  ...sharedTokens,
};

export const darkTheme: Theme = {
  colors: {
    primary: "#B0A3B0",
    primaryDark: "#8E7D8E",
    secondary: "#D3C8D3",
    secondaryDark: "#B8A6B8",
    accent: "#1B1725",
    accentLight: "#3A2E3F",
    background: "#121212",
    modalBackground: "rgba(0, 0, 0, 0.8)",
    surface: "#1E1E1E",
    error: "#CF6679",
    warning: "#FFB300",
    info: "#64B5F6",
    success: "#66BB6A",
    textPrimary: "#E0E0E0",
    textSecondary: "#B0BEC5",
    textDisabled: "#757575",
    textDark: "black",
    border: "#333333",
  },
  ...sharedTokens,
};
