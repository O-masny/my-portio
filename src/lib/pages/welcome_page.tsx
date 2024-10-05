"use client";
import "../../styles/portfolio.css";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp } from "../components/utils/animations/animations";

const words = [
  "Ahoj",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
];

export default function WelcomePage() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [show, setShow] = useState(true);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", updateDimensions);
      }
    };
    updateDimensions();

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensions);
      }
    };
  }, []);

  useEffect(() => {
    if (index === words.length - 1) {
      setTimeout(() => {
        setShow(false);
      }, 500); // Delay before hiding the splash screen
      return;
    }
    const timeout = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 150
    );

    return () => clearTimeout(timeout);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height
    }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          variants={slideUp}
          initial="initial"
          animate="enter"
          exit="exit"
          className="introduction"
        >
          {dimension.width > 0 && (
            <>
              <motion.p variants={opacity} initial="initial" animate="enter">
                {words[index]}
              </motion.p>
              <svg width={dimension.width} height={dimension.height}>
                <motion.path
                  variants={curve}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                ></motion.path>
              </svg>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
