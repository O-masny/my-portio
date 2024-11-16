"use client";
import React, { useEffect, useRef } from "react";
import { wreathAnimation } from "../animations/titleAnimation";

const BloomingWreath: React.FC = () => {
  const wreathContainerRef = useRef<HTMLDivElement | null>(null); // Create a ref for the container

  useEffect(() => {
    if (typeof window !== "undefined" && wreathContainerRef.current) {
      wreathAnimation(wreathContainerRef.current); // Trigger the animation only on the client side
    }
  }, []);

  return (
    <div
      ref={wreathContainerRef} // Attach the ref to the container
      className="wreath-container h-screen absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[...Array(10)].map((_, index) => {
          const angle = (index / 10) * Math.PI * 2; // Divide circle into segments
          const radius = 200 + Math.sin(angle) * 100; // Random radius based on sine wave
          const cx = 400 + Math.cos(angle) * radius;
          const cy = 400 + Math.sin(angle) * radius;

          return (
            <circle
              key={index}
              className="wreath-circle"
              cx={cx}
              cy={cy}
              r="30"
              fill="none"
              stroke={`hsl(${(index * 36) % 360}, 70%, 50%)`} // Different colors
              strokeWidth={3 + Math.sin(angle) * 2} // Random stroke width
            />
          );
        })}
      </svg>
    </div>
  );
};

export default BloomingWreath;
