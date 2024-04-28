import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Import pro obrázky z Next.js
import MyThemeContext from "../components/theme_provider";

export default function EducationAndHobbies() {
  const [contrastMode, setContrastMode] = useState(false);
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);
  const handlePaintingClick = () => {
    setContrastMode(!contrastMode); // Přepínání kontrastního módu
    themeCtx.toggleThemeHandler();
  };

  const sectionStyle = contrastMode
    ? {
        background: "radial-gradient(circle, white, lightgray)", // Kontrastní styl
        color: "black",
      }
    : {
        background: "radial-gradient(circle, #6C63FF, #3B82F6)", // Výchozí styl
        color: "white",
      };

  return (
    <div style={sectionStyle} className="p-6 text-center">
      {" "}
      {/* Celkový styl */}
      {/* Sekce pro vzdělání */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold">Education</h2>
        <p className="text-xl">MSc in Computer Science - 2020</p>
        <p className="text-xl">BSc in Information Technology - 2017</p>
      </motion.div>
      {/* Sekce pro záliby */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="mt-6"
      >
        <h2 className="text-4xl font-bold">Hobbies</h2>
        <p className="text-xl">Photography, Painting, Hiking</p>

        {/* Interaktivní prvek - malba */}
        <button onClick={handlePaintingClick} className="mt-4">
          <Image
            src="/pic1.jpg" // Ujistěte se, že cesta je správná
            alt="Painting"
            width={100}
            height={100}
            className="rounded"
          />
        </button>
      </motion.div>
    </div>
  );
}
