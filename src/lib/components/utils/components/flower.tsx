"use client";
import React, { useEffect, useRef } from "react";
import { flowerAnimation } from "../animations/animations";
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";

const FlowerEffect: React.FC = () => {
  const flowerContainerRef = useRef<HTMLDivElement | null>(null); // Create a ref for the container

  useEffect(() => {
    if (typeof window !== "undefined" && flowerContainerRef.current) {
      gsap.registerPlugin(ScrollTrigger);

      flowerAnimation(flowerContainerRef.current); // Trigger the animation when the component mounts
    }
  }, []);

  return (
    <div
      ref={flowerContainerRef} // Attach the ref to the container
      className="z-10 flower-container min-h-screen flex items-center justify-center"
    >
      <svg
        className="flower"
        width="300"
        height="600"
        viewBox="0 0 300 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stonky */}
        <path
          d="M150 550 C150 350, 120 300, 150 200 C180 150, 220 120, 200 90 C150 40, 200 0, 150 0 C100 0, 150 40, 120 90 C90 120, 120 150, 150 200 C180 250, 150 300, 150 550 Z"
          fill="none"
          stroke="#2d6a4f"
          strokeWidth="8"
        />

        {/* Květy */}
        <circle
          cx="150"
          cy="90"
          r="50"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="100"
          cy="150"
          r="40"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="200"
          cy="150"
          r="40"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="150"
          cy="200"
          r="40"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="130"
          cy="60"
          r="30"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="170"
          cy="60"
          r="30"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="80"
          cy="120"
          r="30"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
        <circle
          cx="220"
          cy="120"
          r="30"
          fill="none"
          stroke="#ff6f61"
          strokeWidth="6"
        />
      </svg>
    </div>
  );
};

export default FlowerEffect;
