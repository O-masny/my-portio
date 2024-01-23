"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";

interface SplitCenterProps {
  leftBackground: string;
  rightBackground: string;
}

const SplitCenter: React.FC<SplitCenterProps> = ({
  leftBackground,
  rightBackground,
}) => {
  const { theme, setTheme } = useTheme();
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = () => {
    // Přepnout mezi světlým a tmavým tématem
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Přepnout stav tlačítka
    setButtonClicked((prevState) => !prevState);
  };

  return (
    <div className="flex r1">
      <div className={`w-1/2 h-screen ${leftBackground}`}>
        <button
          onClick={handleButtonClick}
          className={`px-4 py-2 ${
            buttonClicked
              ? " ${leftBackground} text-white"
              : " ${rightBackground} text-black"
          }`}
        >
          Změnit téma
        </button>
      </div>
    </div>
  );
};

export default SplitCenter;
