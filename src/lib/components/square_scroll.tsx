"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ScrollAnimation() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.outerHeight;
      const scrollX = window.scrollX || window.pageXOffset;

      // Adjust 0.1 to control the scroll speed horizontally
      controls.start({
        y: scrollY,
        x: scrollX * 0.5,
        transition: { duration: 0 },
      });
    };

    handleScroll(); // Call it initially to set the initial position
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{
        width: 100,
        height: 100,
        border: "2px solid white",
        top: 0,
        left: 35,
      }}
      animate={controls}
      style={{ position: "fixed" }}
    />
  );
}
