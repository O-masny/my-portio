import React from "react";
import { motion } from "framer-motion";
import Board from "../components/utils/tic_tac_toe";

// Stávající rozhraní pro tvary
interface Shape {
  key: number;
  type: "circle" | "cross";
  color: string;
  initial: { opacity: number; x: number; y: number };
  animate: { opacity: number; x: number; y: number };
}

export default function MainPage() {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      {/* Integrace piškvorek do hlavní stránky */}

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">My name is Ondřej Masný</h1>
        <motion.p
          transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
          className="mt-5 text-xl"
        >
          Welcome to my portfolio.
        </motion.p>
        <motion.p
          transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
          className="mt-2 text-lg"
        >
          I am a software developer specializing in frontend technologies.
        </motion.p>
      </motion.div>
    </main>
  );
}
