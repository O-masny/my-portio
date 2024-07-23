"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const FlowerEffect: React.FC = () => {
  useEffect(() => {
    const circles =
      document.querySelectorAll<SVGCircleElement>(".flower circle");
    const paths = document.querySelectorAll<SVGPathElement>(".flower path");

    // Create a GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flower-container",
        end: "center 20%",

        scrub: true,
      },
    });

    // Animate circles
    circles.forEach((circle) => {
      const length = circle.getTotalLength();
      tl.fromTo(
        circle,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power1.out",
          stagger: {
            amount: 0.2, // Adjust timing between each circle
          },
        }
      );
    });

    // Animate paths
    paths.forEach((path) => {
      const length = path.getTotalLength();
      tl.fromTo(
        path,
        {
          strokeDasharray: length,
          strokeDashoffset: length,
        },
        {
          strokeDashoffset: 0,
          duration: 0.5, // Shorten duration for faster animation
          ease: "power1.out",
          stagger: {
            amount: 0.3, // Adjust timing between each path    ¨
          },
        },
        "<" // Align with previous animation
      );
    });

    // Final flower scale animation
    tl.to(".flower", {
      scale: 1.2, // Enlarge the flower
      duration: 2, // Shorten duration for faster animation
      ease: "power1.out",
      y: +200,
    });
  }, []);

  return (
    <div className="z-10 flower-container min-h-screen flex items-center justify-center">
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
