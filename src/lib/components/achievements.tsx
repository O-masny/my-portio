"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const completedAchievements = [
  {
    title: "Bachelor's Degree in Computer Science",
    institution: "UTB FAI",
    year: "2019 - 2022",
  },
  {
    title:
      "Master's Degree as Teacher of Computer Science for secondary schools",
    institution: "UTB FAI",
    year: "2022 - 2024",
  },
];

const ongoingAchievements = [
  {
    title: "Ph.D. Ingineering Informatics",
    institution: "UTB FAI",
    year: "2024 - TBD",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-800 to-blue-500 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">My suffered achievements</h1>

      <motion.div
        className="max-w-4xl mb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4">Completed Achievements</h2>
        {completedAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="p-4 mb-4 bg-white min-w-full text-black rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-center sm:text-left flex-grow">
                <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                <p className="text-lg">{achievement.institution}</p>{" "}
                <p className="text-lg mt-2 mr-8 sm:mt-0 ">{achievement.year}</p>
              </div>

              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src={`/images/fai.png`}
                  alt="FAI Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-semibold mb-4">Ongoing</h2>
        {ongoingAchievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="p-4 mb-4 bg-white text-black rounded-lg shadow-lg flex flex-col sm:flex-row justify-between items-center"
            variants={itemVariants}
          >
            <div className="flex items-center justify-between w-full">
              <div className="text-center sm:text-left flex-grow">
                <h2 className="text-2xl font-semibold">{achievement.title}</h2>
                <p className="text-lg">{achievement.institution}</p>{" "}
                <p className="text-lg mt-2 mr-8 sm:mt-0">{achievement.year}</p>
              </div>{" "}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <Image
                  src={`/images/fai.png`}
                  alt="FAI Logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
