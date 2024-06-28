import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../components/slider";
import Image from "next/image";

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

  const circlePosition =
    section === "Education" ? { left: "0%" } : { left: "50%" };

  return (
    <div
      id="education"
      className={`p-16  items-center text-5xl justify-center flex flex-col min-h-screen ${textColor}`}
    >
      <div className="relative  mb-8 px-4 py-2 justify-between bg-slate-700 w-screen items-center flex row-auto">
        <motion.div
          className="absolute top-0 bottom-0 w-1/2 h-full rounded-full"
          initial={circlePosition}
          animate={circlePosition}
          color="white"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{
            width: "100vh",
            height: "100vw",
            borderRadius: "50%",
            zIndex: 10,
          }}
        />
        <div className="h-16" />

        <button
          onClick={() => handleSectionChange("Education")}
          className={`hover:text-yellow-400 px-4 py-2 relative z-10 ${
            section === "Education" ? "text-white" : "text-black"
          }`}
        >
          Education
        </button>
        <button
          onClick={() => handleSectionChange("Art")}
          className={`hover:text-red-700 px-4 py-2 relative z-10 ${
            section === "Art" ? "text-white" : "text-black"
          }`}
        >
          Art
        </button>
      </div>
      <div className="flex flex-col    h-screen">
        {/* Obsah podle vybrané sekce */}
        {section === "Education" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={educationVariants}
            transition={{ duration: 1, ease: "easeOut" }} // Přechod a animace
            className="text-center"
          >
            <h2 className="text-4xl font-bold space-y-16">Education</h2>
            <p className="text-xl">Bachelors degree at UTB FAI</p>{" "}
            <div className="bg-white relative w-screen my-4">
              {" "}
              <Image
                src={`/images/fai.png`}
                alt="image"
                height={200}
                width={600}
              />{" "}
            </div>{" "}
          </motion.div>
        )}

        {section === "Art" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={educationVariants}
            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-4xl font-bold">Art</h2>
            <p className="text-xl">PAXINTXNG</p>
          </motion.div>
        )}
      </div>
      {section === "Art" && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={educationVariants}
          transition={{ duration: 2, ease: "easeOut" }}
          className="mt-8 text-center "
        >
          <Slider />
        </motion.div>
      )}
    </div>
  );
}
