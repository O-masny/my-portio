"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface Shape {
  key: number;
  color: string;
  width: number;
  height: number;
  initial: { opacity: number; x: number; y: number };
}

export default function LandingScreen() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const controls = useAnimation();

  useEffect(() => {
    const generateShapes = () => {
      const shapeCount = 16;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const generatedShapes = Array.from({ length: shapeCount }, (_, index) => {
        const width = windowWidth / shapeCount;
        const height = windowHeight;
        const color = `rgba(${Math.random() * 50 + 50}, ${
          Math.random() * 50 + 50
        }, ${Math.random() * 50 + 50}, 0.7)`;

        return {
          key: index,
          color,
          width,
          height,
          initial: { opacity: 0, x: index * width, y: -windowHeight },
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
    }, 500);

    return () => {
      window.removeEventListener("resize", generateShapes);
    };
  }, [controls]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative w-full h-screen md:h-auto md:w-1/2 flex items-center justify-center ">
        <div className="absolute inset-0">
          <Image
            src="/images/pic1.jpg"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-50"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center md:hidden">
          <div className="text-center p-4 bg-black bg-opacity-50 rounded">
            <h1 className="text-2xl font-bold mb-4 text-white">
              My name is{" "}
              <span className="text-black text-4xl">Ondřej Masný</span>
            </h1>
            <p className="text-md text-white">
              Welcome to my <span className="text-black text-2xl">WEB</span>!
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-1/2 flex items-center justify-center bg-gradient-to-bl from-green-500  to-black-500 to-70%  p-8">
        {" "}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            My name is <span className="text-black text-4xl">Ondřej Masný</span>
          </h1>
          <p className="text-md md:text-lg text-white">
            Welcome to my <span className="text-black text-2xl">WEB</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
