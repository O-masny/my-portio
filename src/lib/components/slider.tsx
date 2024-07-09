import * as React from "react";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { slider1, slider2 } from "../data/data";

export default function Slider() {
  const container1 = useRef<HTMLDivElement | null>(null);
  const container2 = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: container1,
    offset: ["start end", "end start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: container2,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress1, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress2, [0, 1], [-150, 50]);

  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="relative w-full h-full">
      {/* First slider */}
      <div
        id="Carousel1"
        ref={container1}
        className="flex flex-col space-y-10 overflow-hidden relative"
      >
        <motion.div style={{ x: x1 }} className="flex space-x-4 w-full">
          {slider1.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer flex-shrink-0"
              style={{ width: "calc(100vw / 3)", height: "50vh" }}
              onClick={() => openFullScreen(`/images/${project.src}`)}
            >
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg mt-2"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-2"></div>
      {/* Second slider */}
      <div
        id="Carousel2"
        ref={container2}
        className="flex flex-col space-y-10 overflow-hidden relative"
      >
        <motion.div style={{ x: x2 }} className="flex space-x-4 w-full">
          {slider2.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer flex-shrink-0"
              style={{ width: "calc(100vw / 3)", height: "50vh" }}
              onClick={() => openFullScreen(`/images/${project.src}`)}
            >
              <Image
                src={`/images/${project.src}`}
                alt="image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </motion.div>
      </div>
      {/* Full screen image modal */}
      {fullScreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-75 overflow-auto"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-full max-h-full">
            <div className="relative w-full h-3/4   items-center">
              <Image
                src={fullScreenImage}
                alt="image"
                width={800} // Adjust width as needed for responsiveness
                height={600} // Adjust height as needed for responsiveness
                objectFit="contain"
                className="rounded-lg "
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
