"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import FlowerStatic from "../utils/flower_static"; // Adjust the import path as needed

const sidebarVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: "100%", opacity: 0 }, // Slide out to the right
};

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Flower Effect */}

      {/* Hamburger Icon */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md focus:outline-none transition-transform duration-300 transform hover:scale-105"
        >
          {isOpen ? (
            <XMarkIcon className="w-8 h-8 text-white" />
          ) : (
            <Bars3Icon className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-3/4 md:w-1/2 bg-gradient-to-tl from-gray-800 via-gray-900 to-gray-700 text-white z-40 p-4 flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button onClick={toggleMenu} className="self-end p-2 mb-4">
              <XMarkIcon className="w-8 h-8 text-white" />
            </button>{" "}
            <nav className="flex flex-col  justify-center space-y-6 text-center">
              <a
                href="#"
                className="text-xl md:text-2xl font-semibold tracking-wide hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl font-semibold tracking-wide hover:text-gray-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl font-semibold tracking-wide hover:text-gray-400 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl font-semibold tracking-wide hover:text-gray-400 transition-colors duration-300"
              >
                Contact
              </a>{" "}
              <div className="bg-cover">
                {" "}
                <FlowerStatic />
              </div>
            </nav>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
              {/* Facebook Icon */}
              <a
                href="https://facebook.com"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                    className="h-5 w-5"
                  >
                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                  </svg>
                </span>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </span>
              </a>
              {/* LinkedIn Icon */}
              <a
                href="https://linkedin.com"
                className="text-white hover:text-gray-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <span className="w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="h-5 w-5"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
