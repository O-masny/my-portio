"use client";
import { useEffect, useLayoutEffect, useRef } from "react";
import { bitter, bebas } from "../../../styles/global_styles";
import Image from "next/image";
import { runTitleAnimation } from "@/lib/utils/animations/titleAnimation";


export default function LandingScreen() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    runTitleAnimation(titleRef);
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative overflow-hidden bg-black">
      <div className="relative w-full h-screen md:h-auto md:w-1/2 flex items-center justify-center mr-2">
        <Image
          src="/images/white_moon.jpeg"
          alt="Description of image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 z-0"
            style={{
              transform: "translate(50%, 50%) scale(1.1)", // Přesuneme a zvětšíme kruh
            }}
          >
            <circle cx="50" cy="50" r="50" fill="black" />
          </svg>
        </div>
      </div>
      <div className="relative flex w-full md:w-1/2 items-center justify-center p-8 title-section">
        <div className="relative z-10 text-center">
          <h1
            ref={titleRef}
            className={`${bebas.className} title text-2xl md:text-4xl font-bold mb-4 text-white`}
          >
            My name is{" "}Ondřej Masný
          </h1>
          <p
            className={`${bebas.className} text-3xl text-md md:text-lg text-white`}
          >
            Welcome to my <span className="text-white text-2xl">WEB</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
