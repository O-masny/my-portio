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

  if (!sliderData || sliderData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <motion.div style={{ translateX: x }} className="flex space-x-4 w-full">
        {sliderData.map((project, index) => (
          <div
            key={index}
            className="relative cursor-pointer flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-64" // Responsive widths
            onClick={() => onImageClick(`/images/${project.src}`)}
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
  );
};

const SliderContainer: React.FC = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const openFullScreen = (src: string) => {
    setFullScreenImage(src);
  };

  const closeFullScreen = (event: React.MouseEvent) => {
    event.stopPropagation();
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
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-75"
          onClick={closeFullScreen}
        >
          <div className="relative max-w-full max-h-full p-4">
            <div className="relative w-full h-3/4">
              <Image
                src={fullScreenImage}
                alt="image"
                width={600} // Adjust width as needed for responsiveness
                height={600} // Adjust height as needed for responsiveness
                layout="responsive"
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
