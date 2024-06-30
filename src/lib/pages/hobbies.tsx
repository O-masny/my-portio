import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../components/slider";
import Image from "next/image";
import Achievements from "../components/achievements";

export default function EducationAndHobbies() {
  const [contrastMode, setContrastMode] = useState(false);
  const [section, setSection] = useState("Art"); // Výchozí sekce je Education

  const handleToggleContrast = () => {
    setContrastMode(!contrastMode);
  };

  const handleSectionChange = (selectedSection: string) => {
    setSection(selectedSection);
  };

  const sectionStyle = contrastMode
    ? "bg-gradient-to-r from-white to-red-500" // Kontrastní styl
    : "bg-gradient-to-r from-blue-800 to-blue-500"; // Výchozí styl s tmavšími barvami

  const textColor = contrastMode ? "text-black" : "text-white";

  const circlePosition =
    section === "Education" ? { left: "0%" } : { left: "50%" };

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
      className={`flex flex-col items-center justify-center  ${sectionStyle} ${textColor}`}
    >
      <div className="relative text-5xl mb-8 px-4 py-2 flex justify-between bg-slate-800 w-full items-center">
        <button
          onClick={() => handleSectionChange("Education")}
          className={`hover:text-yellow-400 px-4 py-2 relative z-20 ${
            section === "Education" ? "text-white" : "text-black"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => handleSectionChange("Art")}
          className={`hover:text-red-700 px-4 py-2 relative z-20 ${
            section === "Art" ? "text-white" : "text-black"
          }`}
        >
          Art
        </button>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        {/* Obsah podle vybrané sekce */}
        {section === "Education" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={educationVariants}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            {" "}
            <div className="relative w-full my-4 flex justify-center bg-slate-400">
              <Image
                src={`/images/fai.png`}
                alt="FAI Logo"
                height={400}
                width={600}
              />
            </div>
            <Achievements />
          </motion.div>
        )}

        {section === "Art" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={educationVariants}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <h2 className="text-4xl font-bold mb-8">PAXNTXNGS</h2>
            <Slider />
          </motion.div>
        )}
      </div>
    </div>
  );
}
