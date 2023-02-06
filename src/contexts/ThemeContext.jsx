import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
const isSchemeDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(isSchemeDark);
  // Set default theme to the system scheme.

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={[darkTheme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
