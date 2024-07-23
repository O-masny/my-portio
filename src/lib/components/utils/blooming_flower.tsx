"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BloomingWreath: React.FC = () => {
  useEffect(() => {
    const circles =
      document.querySelectorAll<SVGCircleElement>(".wreath-circle");

    // Create a GSAP timeline for each circle
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wreath-container",
        start: "top top", // Start animation when the wreath-container reaches the bottom of the viewport
        end: "top bottom", // End animation when the wreath-container reaches the top of the viewport
        scrub: true, // Smooth scroll effect
      },
    });

    circles.forEach((circle, index) => {
      const radius = parseFloat(circle.getAttribute("r") || "0");
      tl.fromTo(
        circle,
        {
          strokeDasharray: radius * Math.PI * 2, // Circumference
          strokeDashoffset: radius * Math.PI * 2,
          opacity: 0,
        },
        {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2,
          ease: "power1.out",
          stagger: {
            amount: 0.3, // Adjust timing between each circle
          },
        }
      );
    });
  }, []);

  return (
    <div className="wreath-container h-1/2 w-screen flex items-center justify-center relative overflow-hidden">
      <svg
        className="wreath-svg"
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
