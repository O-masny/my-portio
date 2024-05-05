import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";

// Původní definice sliderů
const slider1 = [
  { color: "#e3e5e7", src: "pic1.jpg" },
  { color: "#d6d7dc", src: "pic2.jpeg" },
  { color: "#e3e3e3", src: "pic3.jpeg" },
  { color: "#21242b", src: "pic4.jpeg" },
];

const slider2 = [
  { color: "#d4e3ec", src: "pic4.jpeg" },
  { color: "#e5e0e1", src: "pic6.jpeg" },
  { color: "#d7d4cf", src: "pic5.jpeg" },
  { color: "#e1dad6", src: "pic2.jpeg" },
];

export default function Slider() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  // Transformace pro horizontální posuv
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="relative w-full h-full">
      <div
        id="Carousel"
        ref={container}
        className="flex flex-col space-y-10 overflow-hidden relative" // Styl posuvníku
      >
        {/* Základní kruh na pozadí */}
        <motion.div
          style={{
            opacity: scrollYProgress,
            scale: useTransform(scrollYProgress, [0, 1.5], [1, 2]), // Dynamické škálování
          }}
          className="absolute top-0 left-0 z-[-1] aspect-square w-full h-full border-8 border-blue-950 rounded-full" // Styl pro pozadí
        ></motion.div>

        {/* První horizontální posuv */}
        <motion.div
          style={{ x: x1 }}
          className="flex space-x-10 w-full" // Styl pro horizontální posuv
        >
          {slider1.map((project, index) => (
            <div
              key={index}
              className="flex-none w-60 h-60 bg-gray-200 relative"
            >
              {" "}
              {/* Styl pro jednotlivé prvky */}
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </motion.div>

        {/* Druhý horizontální posuv */}
        <motion.div
          style={{ x: x2 }}
          className="flex space-x-10 w-full" // Styl pro horizontální posuv
        >
          {slider2.map((project, index) => (
            <div
              key={index}
              className="flex-none w-60 h-60 bg-gray-300 relative"
            >
              {" "}
              {/* Styl pro jednotlivé prvky */}
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
