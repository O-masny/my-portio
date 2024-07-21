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
    <div className="flex flex-col md:flex-row min-h-screen relative overflow-hidden">
      {/* Levá polovina stránky */}
      <div className="relative w-full h-screen md:h-auto md:w-1/2 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/white_moon.jpeg"
            alt="Description of image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="opacity-50"
          />
        </div>

        {/* Polygon přes fotku */}
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "rotate(90deg) scale(1,5)",
            }}
            className="absolute bottom-0 left-0 z-0"
          >
            <polygon points="0,0 100,0 100,100 0,calc(100% )" fill="black" />
          </svg>
        </div>
      </div>

      {/* Pravá polovina stránky */}
      <div className="relative flex w-full md:w-1/2 items-center justify-center p-8">
        <div className="relative z-10 text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            My name is{" "}
            <span className="[text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-500 bg-red-100 text-black text-4xl">
              Ondřej Masný
            </span>
          </h1>
          <p className="text-md md:text-lg text-white ">
            Welcome to my{" "}
            <span className="text-black text-2xl [text-shadow:1px_1px_2px_var(--tw-shadow-color)] shadow-blue-500 bg-red-100">
              WEB
            </span>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
