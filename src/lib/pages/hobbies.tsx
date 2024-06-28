import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Pro import obrázků z Next.js
import Slider from "../components/slider";

export default function EducationAndHobbies() {
  const [contrastMode, setContrastMode] = useState(false);
  const [section, setSection] = useState("Education"); // Výchozí sekce je Education

  const handleToggleContrast = () => {
    setContrastMode(!contrastMode);
  };

  const handleSectionChange = (selectedSection: string) => {
    setSection(selectedSection);
  };

  const sectionStyle = contrastMode
    ? "radial-gradient(circle, white, red)" // Kontrastní styl
    : "radial-gradient(circle, #1e3a8a, #3b82f6)"; // Výchozí styl s tmavšími barvami

  const textColor = contrastMode ? "text-black" : "text-white";

  const educationVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const hobbiesVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="education"
      className={`p-16 items-center justify-center flex flex-col min-h-screen ${textColor}`}
      style={{ background: sectionStyle }}
    >
      <div className="mb-8 space-x-4">
        <button
          onClick={() => handleSectionChange("Education")}
          className={`px-4 py-2       mb-8 bg-gray-800 text-white rounded
 ${
   section === "Education" ? "bg-blue-500 text-white" : "bg-gray-500 text-black"
 } rounded`}
        >
          Education
        </button>
        <button
          onClick={() => handleSectionChange("Art")}
          className={`px-4 py-2 ${
            section === "Art"
              ? "bg-blue-500 text-white"
              : "bg-gray-500 text-black"
          } rounded`}
        >
          Art
        </button>
      </div>

      {/* Obsah podle vybrané sekce */}
      {section === "Education" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={educationVariants}
          transition={{ duration: 1, ease: "easeOut" }} // Přechod a animace
          className="text-center"
        >
          <h2 className="text-4xl font-bold">Education</h2>
          <p className="text-xl">Bachelors degree at UTB FAI</p>
        </motion.div>
      )}

      {section === "Art" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={hobbiesVariants}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="mt-8 text-center"
        >
          <h2 className="text-4xl font-bold">Art</h2>
          <p className="text-xl">PAXINTXNG</p>
        </motion.div>
      )}

      {section === "Art" && <Slider />}
    </div>
  );
}
