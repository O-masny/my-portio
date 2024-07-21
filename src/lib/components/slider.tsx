import * as React from "react";
import { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { slider1, slider2 } from "../data/data";

interface SliderProps {
  sliderData: { src: string }[];
  xTransform: [number, number];
  onImageClick: (src: string) => void;
}

const Slider: React.FC<SliderProps> = ({
  sliderData,
  xTransform,
  onImageClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], xTransform);

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-10 overflow-hidden relative w-full"
    >
      <motion.div style={{ x }} className="flex space-x-4 w-full">
        {sliderData.map((project, index) => (
          <div
            key={index}
            className="relative cursor-pointer flex-shrink-0"
            style={{ width: "calc(100vw / 3)", height: "50vh" }}
            onClick={() => onImageClick(`/images/${project.src}`)}
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
  );
};

const SliderContainer: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div className="relative w-full h-full">
      <Slider
        sliderData={slider1}
        xTransform={[0, -150]}
        onImageClick={openFullScreen}
      />
      <div className="h-2"></div>
      <Slider
        sliderData={slider2}
        xTransform={[-150, 50]}
        onImageClick={openFullScreen}
      />
      {fullScreenImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-75 overflow-auto"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-full">
            <div className="relative w-full h-3/4 items-center">
              <Image
                src={fullScreenImage}
                alt="image"
                layout="responsive"
                width={600} // Adjust width as needed for responsiveness
                height={600} // Adjust height as needed for responsiveness
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <XCircleIcon
              className="absolute top-4 right-4 h-8 w-8 text-white cursor-pointer"
              onClick={closeFullScreen}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SliderContainer;
