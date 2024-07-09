"use client";
import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { paintingsData } from "@/app/data/data";

export default function Slider() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-150, 50]);

  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  // Rozdělte načtená data do dvou různých sliderů (toto je pouze příklad, můžete si to upravit dle potřeby)
  const slider1 = paintingsData.slice(0, Math.ceil(paintingsData.length / 2));
  const slider2 = paintingsData.slice(Math.ceil(paintingsData.length / 2));

  return (
    <div className="relative w-full h-full">
      <div
        id="Carousel"
        ref={container}
        className="flex flex-col space-y-10 overflow-hidden relative"
      >
        <motion.div style={{ x: x1 }} className="flex space-x-4 w-full">
          {slider1.map((project, index) => (
            <div
              key={project.id}
              className="relative cursor-pointer flex-shrink-0"
              style={{ width: "calc(100vw / 4)", height: "50vh" }}
              onClick={() => openFullScreen(project.imageUrl.src)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </motion.div>

        <motion.div style={{ x: x2 }} className="flex space-x-4 ">
          {slider2.map((project, index) => (
            <div
              key={project.id}
              className="relative cursor-pointer flex-shrink-0"
              style={{ width: "calc(100vw / 4.5)", height: "50vh" }}
              onClick={() => openFullScreen(project.imageUrl.src)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {fullScreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-75 overflow-auto"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-full h-full">
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
                objectFit="contain"
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
