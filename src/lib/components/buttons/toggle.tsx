"use client"
import React from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = toggleThemeHandler(); // Přístup k aktuálnímu tématu a přepínací funkci

  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
}
function toggleThemeHandler(): { theme: any; toggleTheme: any; } {
  throw new Error("Function not implemented.");
}

