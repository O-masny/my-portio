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

const images = [
  "/images/pic1.jpg",
  "/images/pic2.jpeg",
  "/images/pic3.jpeg",
  "/images/pic4.jpeg",
  "/images/pic5.jpeg",
  // Přidejte další obrázky podle potřeby
];

const getGridItemClasses = (index: number) => {
  switch (index % 6) {
    case 0:
      return "col-span-2 row-span-2";
    case 1:
      return "col-span-1 row-span-1";
    case 2:
      return "col-span-1 row-span-2";
    case 3:
      return "col-span-2 row-span-1";
    case 4:
      return "col-span-1 row-span-1";
    case 5:
      return "col-span-1 row-span-2";
    default:
      return "";
  }
};

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
      <div className="relative w-full h-screen md:h-auto md:w-1/2 flex items-center justify-center">
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

      {/* Pravá polovina stránky s nepravidelnou mřížkou obrázků */}
      <div className="relative hidden md:flex w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="absolute inset-x-0 bottom-0 h-1/2">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 255, 0, 0.7), rgba(0, 0, 0, 0.7))",
              clipPath: "ellipse(100% 100% at 50% 100%)",
            }}
          ></div>
        </div>
        <div className="relative z-10 w-full h-full grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {images.map((src, index) => (
            <div
              key={index}
              className={`relative ${getGridItemClasses(index)}`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
