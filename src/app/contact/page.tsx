"use client";
import React from "react";
import { motion } from "framer-motion";
import BloomingWreath from "@/lib/components/utils/blooming_flower"; // Adjust the import path as needed
import { globalStyles } from "../../styles/global_styles"; // Adjust the import path as needed

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <BloomingWreath />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center  p-8 text-center rounded-lg shadow-lg max-w-lg w-full bg-white bg-opacity-5">
        <h1 className={`${globalStyles.heading} text-white opacity-50 mb-8`}>
          Get in Touch
        </h1>
        <form className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              className={`block w-full px-4 py-2 border border-gray-300 bg-transparent backdrop-blur-sm rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.text}`}
              rows={4}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className={`w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${globalStyles.button}`}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}
