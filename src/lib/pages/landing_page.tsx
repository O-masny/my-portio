import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Rozhraní pro tvar
interface Shape {
  key: number;
  color: string;
  size: number;
  borderRadius: string;
  initial: { opacity: number; x: number; y: number };
  animate: { opacity: number; x: number; y: number };
}

export default function MainPage() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const rows = 3; // Počet řad
    const columns = 3; // Počet sloupců
    const shapeCount = rows * columns; // Celkový počet tvarů

    const generatedShapes = Array.from({ length: shapeCount }, (_, index) => {
      const size = 200 + Math.random() * 50; // Velikost tvarů
      const color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 0.5)`; // Náhodná barva s průhledností

      // Náhodný tvar (čtverec nebo kruh)
      const borderRadius = Math.random() > 0.5 ? "50%" : "0%";

      // Počáteční umístění (ze stran)
      const startX = index % 2 === 0 ? -200 : 200; // Zleva nebo zprava
      const startY = -200; // Ze shora

      // Konečné pozice ve mřížce
      const targetX = (100 / columns) * (index % columns) - 50; // Střed sloupce
      const targetY = (100 / rows) * Math.floor(index / columns) - 50; // Střed řady

      return {
        key: index,
        color,
        size,
        borderRadius, // Tvar (čtverec nebo kruh)
        initial: { opacity: 0, x: startX, y: startY }, // Začátek mimo obrazovku
        animate: { opacity: 1, x: targetX, y: targetY }, // Konečné umístění
      };
    });

    setShapes(generatedShapes); // Nastavení generovaných tvarů
  }, []); // Jednou při prvním načtení stránky

  return (
    <main className="">
      <div className="relative h-screen w-screen flex items-center justify-center">
        {shapes.map((shape) => (
          <motion.div
            key={shape.key}
            initial={shape.initial} // Počáteční pozice
            animate={shape.animate} // Konečné umístění ve mřížce
            transition={{
              duration: 3, // Délka animace
              ease: "easeInOut",
              delay: 0.7 * shape.key, // Zpoždění
            }}
            style={{
              backgroundColor: shape.color,
              width: shape.size,
              height: shape.size,
              position: "absolute",
              borderRadius: shape.borderRadius, // Tvar (čtverec nebo kruh)
              left: `${shape.animate.x + 56}%`, // Uprostřed sloupce
              top: `${shape.animate.y + 55}%`, // Uprostřed řady
            }}
          />
        ))}

        {/* Obsah stránky */}
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 z-50" // Responzivní velikost písma
          >
            My name is Ondřej Masný
          </h1>
          <motion.p
            transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
            className="text-xl md:text-2xl lg:text-3xl mb-4 z-50" // Responzivní velikost
          >
            Welcome to my portfolio.
          </motion.p>
          <motion.p
            transition={{ delay: 3, duration: 1.5, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl" // Responzivní velikost
          >
            I am a software developer specializing in frontend technologies.
          </motion.p>
        </motion.div>
      </div>
    </main>
  );
}
