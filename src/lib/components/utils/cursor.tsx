"use client";

import { useEffect } from "react";
import styles from "../../../styles/image_slide.module.css";

import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickCursor({}) {
  const cursorSize = 15;

  const mouse = {
    x: useMotionValue(0),

    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 55, stiffness: 600, mass: 1 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),

    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;

    mouse.x.set(clientX - cursorSize / 2);

    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  });

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        style={{
          x: smoothMouse.x,
          y: smoothMouse.y,
        }}
        className={styles.cursor}
      ></motion.div>
    </div>
  );
}
