import React, { useState } from "react";
import { motion } from "framer-motion";
import Slider from "../components/slider";
import Achievements from "../components/achievements";
import PortfolioCardGrid from "@/app/projects/page";
import Link from "next/link";
import BloomingFlower from "../components/utils/blooming_flower";

export default function EducationAndHobbies() {
  const [contrastMode, setContrastMode] = useState(false);
  const [section, setSection] = useState("Art");

  const handleToggleContrast = () => {
    setContrastMode(!contrastMode);
  };

  const handleSectionChange = (selectedSection: string) => {
    setSection(selectedSection);
  };

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
      className={`flex flex-col items-start justify-center min-h-screen  ${textColor}`}
    >
      {" "}
      <div className="h-64"></div>
      <div className="relative text-5xl mb-8 px-4 py-2 flex justify-around w-full items-center">
        <div className="absolute w-full h-full flex justify-around items-center">
          <div
            className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center cursor-pointer ${
              section === "Education" ? "bg-white" : "border-2 border-white"
            }`}
            style={{ left: "20%", transform: "translate(-50%, -50%)" }}
            onClick={() => handleSectionChange("Education")}
          >
            <span
              className={`text-xl font-bold relative z-20 ${
                section === "Education"
                  ? "text-black"
                  : "text-white border-2 border-black"
              }`}
            >
              Education
            </span>
          </div>
          <div
            className={`absolute w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center cursor-pointer ${
              section === "Art" ? "bg-white" : "border-2 border-white"
            }`}
            style={{ left: "80%", transform: "translate(-50%, -50%)" }}
            onClick={() => handleSectionChange("Art")}
          >
            <span
              className={`text-xl font-bold relative z-20 ${
                section === "Art"
                  ? "text-black"
                  : "text-white border-2 border-black"
              }`}
            >
              Art
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-full">
        {section === "Education" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={educationVariants}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mt-8 text-center"
          >
            <Achievements /> <PortfolioCardGrid />
          </motion.div>
        )}

        {section === "Art" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={hobbiesVariants}
            transition={{ duration: 2, ease: "easeOut" }}
            className="mt-8 text-center w-full"
          >
            <h2 className="text-4xl font-bold mb-8">PAINTINGS</h2>
            <Slider />
            <div className="h-32"></div>
            <div className="container mx-auto">
              {" "}
              <h1 className="text-3xl font-bold mb-6">
                There are few more, check them out!
              </h1>{" "}
              <div className="w-1/2 inline-block text-white cursor-pointer group h-16 py-4 border-4 border-white bg-lightWhite animate-triangleTransform  ">
                <Link href="/paintings" shallow={true}>
                  <p className="relative inline-block hover:text-white text-white cursor-pointer">
                    <span className="relative z-10">Go to Paintings</span>{" "}
                    <span
                      className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                      style={{
                        top: "50%",
                        left: "50%",
                        width: "120%",
                        height: "120%",
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  </p>
                </Link>{" "}
              </div>{" "}
              <span
                className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                style={{
                  top: "50%",
                  left: "50%",
                  width: "120%",
                  height: "120%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>{" "}
          </motion.div>
        )}
      </div>
    </div>
  );
}
