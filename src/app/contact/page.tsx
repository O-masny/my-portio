"use client";
import { motion } from "framer-motion";
import BloomingWreath from "@/lib/components/utils/blooming_flower";

export default function ContactPage() {
  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-centeroverflow-hidden"
    >
      <div className="absolute inset-0.5 z-0"></div>

      <div className="relative z-10 flex align-bottom bottom-0 flex-col items-center p-8 text-cente rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Get in Touch
        </h1>

        <form className="w-full">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Message"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows={4}
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
}
