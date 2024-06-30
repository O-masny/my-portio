"use client";
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        yoyo: Infinity, // Loop the animation
        ease: "easeInOut",
        duration: 2,
        loop: "true",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="h-center bottom-0 w-full"
    >
      <footer className="bg-gray-800 p-4 flex left-0">
        <div className="container mx-auto text-center">
          <motion.p className="text-white text-2xl" variants={textVariants}>
            ©2024 Ondřej Masný
          </motion.p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
