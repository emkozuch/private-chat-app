interface Typography {
  fontFamily: string;
  fontSize: {
    small: string;
    normal: string;
    medium: string;
    large: string;
    xlarge: string;
    xxlarge: string;
  };
  fontWeight: {
    light: number;
    regular: number;
    medium: number;
    bold: number;
  };
  lineHeight: {
    small: string;
    normal: string;
    medium: string;
    large: string;
  };
}

interface Breakpoints {
  mobileXs: number;
  mobileSm: number;
  mobileMd: number;
  mobileLg: number;
  mobileXl: number;
  desktopSm: number;
  desktopMd: number;
  desktopLg: number;
  desktopXl: number;
  desktopXXL: number;
}

interface Spacing {
  none: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

interface Colors {
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
  background: string;
  modalBackground: string;
  accent: string;
  accentLight: string;
  surface: string;
  error: string;
  warning: string;
  info: string;
  success: string;
  textPrimary: string;
  textSecondary: string;
  textDark: string;
  textDisabled: string;
  border: string;
}
export interface Borders {
  sizes: {
    thin: string;
    medium: string;
    thick: string;
  };
  radius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
}

export interface Theme {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
  spacing: Spacing;
  borders: Borders;
}
