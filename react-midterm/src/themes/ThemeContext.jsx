import React, { createContext, useContext, useState, useEffect } from "react";
import { themes } from "./themes";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("light");

  const theme = themes[themeName];

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--theme-bg', theme.background);
    root.style.setProperty('--theme-text', theme.text);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, themeName, switchTheme: setThemeName }}>
      <div style={{ background: "var(--theme-bg)", color: "var(--theme-text)", minHeight: "100vh" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);