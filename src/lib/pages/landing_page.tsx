import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Shape {
  key: number;
  color: string;
  width: number;
  height: number;
  initial: { opacity: number; x: number; y: number };
}

export default function LandingScreen() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const controls = useAnimation(); // Ovládání animací

  useEffect(() => {
    const generateShapes = () => {
      const shapeCount = 16; // Počet obrazců
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const generatedShapes = Array.from({ length: shapeCount }, (_, index) => {
        const width = windowWidth / shapeCount; // Šířka rovnoměrně po celé obrazovce
        const height = windowHeight; // Výška obrazovky
        const color = `rgba(${Math.random() * 50 + 50}, ${
          Math.random() * 50 + 50
        }, ${Math.random() * 50 + 50}, 0.7)`; // Tmavé barvy s vyšší průhledností

        return {
          key: index,
          color,
          width,
          height,
          initial: { opacity: 0, x: index * width, y: -windowHeight }, // Umístění nad obrazovkou
        };
      });

      setShapes(generatedShapes);
    };

    generateShapes();

    window.addEventListener("resize", generateShapes);

    setTimeout(() => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 7, ease: "easeOut" },
      });
    }, 500); // Zpoždění před spuštěním animace

    return () => {
      window.removeEventListener("resize", generateShapes);
    };
  }, [controls]);

  return (
    <div
      id="home"
      className="relative h-screen w-full bg-black overflow-hidden"
    >
      {shapes.map((shape) => (
        <motion.div
          key={shape.key}
          initial={shape.initial}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }} // Přechod
          className="absolute"
          style={{
            backgroundColor: shape.color,
            top: 0,
            left: shape.initial.x,
            width: shape.width + 35,
            height: shape.height,
            opacity: 0.7,
          }}
        />
      ))}

      <div className="relative h-screen flex justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7, ease: "easeOut" }} // Přechod
          className="text-center"
        >
          <h1 className="relative w-[max-content] font-mono text-2xl before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black">
            Hello World
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
