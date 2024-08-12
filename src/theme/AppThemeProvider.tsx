import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./tokens";
import { createContext, PropsWithChildren, useState } from "react";
import { Theme } from "types";
import { GlobalStyle } from "./GlobalStyle";

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const SwitchThemeContext = createContext(() => {});

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(themes.dark);

  const handleChangeTheme = () => {
    const themeToUse = theme === themes.dark ? themes.light : themes.dark;
    setTheme(themeToUse);
  };

  return (
    <SwitchThemeContext.Provider value={handleChangeTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        {children}
      </ThemeProvider>
    </SwitchThemeContext.Provider>
  );
};
