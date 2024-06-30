import * as React from "react";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";

// Původní definice sliderů
const slider1 = [
  {
    color: "#e3e5e7",
    src: "pic1.jpg",
    title: "Title 1",
    description: "Description 1",
  },
  {
    color: "#d6d7dc",
    src: "pic2.jpeg",
    title: "Title 2",
    description: "Description 2",
  },
  {
    color: "#e3e3e3",
    src: "pic3.jpeg",
    title: "Title 3",
    description: "Description 3",
  },
  {
    color: "#21242b",
    src: "pic4.jpeg",
    title: "Title 4",
    description: "Description 4",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "pic4.jpeg",
    title: "Title 5",
    description: "Description 5",
  },
  {
    color: "#e5e0e1",
    src: "pic6.jpeg",
    title: "Title 6",
    description: "Description 6",
  },
  {
    color: "#d7d4cf",
    src: "pic5.jpeg",
    title: "Title 7",
    description: "Description 7",
  },
  {
    color: "#e1dad6",
    src: "pic2.jpeg",
    title: "Title 8",
    description: "Description 8",
  },
];

export default function Slider() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  }); // Transformace pro horizontální posuv

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // State pro sledování zobrazení full-screen obrázku
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="relative w-full h-full">
      <div
        id="Carousel"
        ref={container}
        className="flex flex-col space-y-10 overflow-hidden relative" // Styl posuvníku
      >
        {/* První horizontální posuv */}
        <motion.div
          style={{ x: x1 }}
          className="flex space-x-10 w-full" // Styl pro horizontální posuv
        >
          {slider1.map((project, index) => (
            <div
              key={index}
              className="bg-gray-200 relative cursor-pointer"
              style={{ width: 400, height: 300 }}
              onClick={() => openFullScreen(`/images/${project.src}`)}
            >
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover" // Udržuje konzistenci velikosti a zobrazení
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
              className="flex-none w-60 h-60 bg-gray-300 relative cursor-pointer"
              style={{ width: 400, height: 300 }}
              onClick={() => openFullScreen(`/images/${project.src}`)}
            >
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover" // Udržuje konzistenci velikosti a zobrazení
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Full-screen zobrazení obrázku */}
      {fullScreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-100 overflow-auto"
          onClick={closeFullScreen} // Zavření full-screen po kliknutí mimo obrázek
        >
          <div className="relative h-screen max-w-screen-lg w-full p-15">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={closeFullScreen}
            >
              <XCircleIcon className="h-12 w-12" />
            </button>
            <div className="text-center text-white">
              <Image
                src={fullScreenImage}
                alt="image"
                layout="fill"
                objectFit="contain" // Udržuje konzistenci velikosti a zobrazení
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Zabránění šíření kliknutí na rodičovské prvky
              >
                <h2 className="text-2xl">{slider1.concat(slider2)[0].title}</h2>
                <p className="text-lg">
                  {slider1.concat(slider2)[0].description}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
