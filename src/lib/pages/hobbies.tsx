import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Pro import obrázků z Next.js

export default function EducationAndHobbies() {
  const [contrastMode, setContrastMode] = useState(false);

  const handleToggleContrast = () => {
    setContrastMode(!contrastMode);
  };

  const sectionStyle = contrastMode
    ? {
        background: "radial-gradient(circle, white, red)", // Kontrastní styl
        color: "black",
      }
    : {
        background: "radial-gradient(circle, #1e3a8a, #3b82f6)", // Výchozí styl s tmavšími barvami
        color: "white",
      };

  const educationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const hobbiesVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-16 ">
      {/* Sekce pro vzdělání */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={educationVariants}
        transition={{ duration: 1, ease: "easeOut" }} // Přechod a animace
      >
        <h2 className="text-4xl font-bold">Education</h2>
        <p className="text-xl">MSc in Computer Science - 2020</p>
        <p className="text-xl">BSc in Information Technology - 2017</p>
      </motion.div>

      {/* Sekce pro záliby */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={hobbiesVariants}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="mt-8"
      >
        <h2 className="text-4xl font-bold">Hobbies</h2>
        <p className="text-xl">Photography, Painting, Hiking</p>

        {/* Interaktivní prvek */}
        <button onClick={handleToggleContrast} className="mt-6">
          <Image
            src="/images/painting.jpg" // Správná cesta k obrázku
            alt="Painting"
            width={120}
            height={120}
            className="rounded-full" // Použití rounded-full pro kruhový tvar
          />
        </button>
      </motion.div>
    </div>
  );
}
