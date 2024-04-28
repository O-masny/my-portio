import React, { createContext, useContext, useState, ReactNode } from "react";

// Typ pro téma
type Theme = "light" | "dark";

// Kontext pro téma
interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void; // Funkce pro přepnutí tématu
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light"); // Výchozí téma

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Přepnutí tématu
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Poskytuje téma všem dětem */}
    </ThemeContext.Provider>
  );
};

// Hook pro použití tématu v komponentách
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
