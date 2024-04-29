import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Shape {
  key: number;
  color: string;
  width: number;
  height: number;
  initial: { opacity: number; x: number; y: number };
}

export default function AnimatedShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const controls = useAnimation(); // Ovládání animací

  useEffect(() => {
    const shapeCount = 16; // Počet obrazců
    const generatedShapes = Array.from({ length: shapeCount }, (_, index) => {
      const width = 100; // Užší šířka
      const height = 700; // Výška pro vertikální obrazce
      const color = `rgba(${Math.random() * 50 + 50}, ${
        Math.random() * 50 + 50
      }, ${Math.random() * 50 + 50}, 0.7)`; // Tmavé barvy s vyšší průhledností

      const initialX = Math.random() * window.innerWidth; // Náhodné umístění na šířku
      const initialY = 0; // Začínají zdola

      return {
        key: index,
        color,
        width,
        height,
        initial: { opacity: 0, x: initialX, y: initialY },
      };
    });

    setTimeout(() => {
      setShapes(generatedShapes);
      controls.start({ opacity: 1 });
    }, 1000); // Prodleva před zobrazením obrazců

    const handleScroll = (): void => {
      const scrollPosition = window.scrollY; // Pozice scrollu
      controls.start((i) => ({
        y: -scrollPosition * 0.5, // Pohyb nahoru při scrollování
        opacity: 1,
      }));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Odstranění event listeneru při odpojení
    };
  }, [controls]);

  return (
    <div className="relative h-screen w-full bg-black">
      {shapes.map((shape) => (
        <motion.div
          key={shape.key}
          initial={shape.initial}
          animate={controls}
          transition={{ duration: 1, ease: "easeOut" }} // Přechod
          className={`absolute ${shape.color}`}
          style={{
            backgroundColor: shape.color,
            top: shape.initial.y, // Začíná zdola
            left: 0,
            right: 0,
            width: shape.width,
            height: shape.height,
            opacity: 0.7,
          }}
        />
      ))}

      <div className="relative h-screen flex justify-center items-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} // Přechod
          className="text-center"
        >
          <h1 className="text-5xl font-bold">Welcome to my page!</h1>
          <p className="mt-4 text-xl">My name is Ondřej Masný</p>
        </motion.div>
      </div>
    </div>
  );
}
