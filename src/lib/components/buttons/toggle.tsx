import { useTheme } from "@/lib/services/theme/theme_provider";
import React from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Přístup k aktuálnímu tématu a přepínací funkci

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}
