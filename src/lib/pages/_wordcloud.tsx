"use client";
import React, { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scaleLog } from "@visx/scale";
import { Wordcloud } from "@visx/wordcloud";
import BloomingFlower from "../components/utils/blooming_flower";

// Datový typ pro Word Cloud
interface WordData {
  text: string;
  value: number;
}

// Data pro Word Cloud
const skillData: WordData[] = [
  { text: "React", value: 60 },
  { text: "Next.js", value: 75 },
  { text: "Chess", value: 69 },
  { text: "Tailwind CSS", value: 60 },
  { text: "Node.js", value: 40 },
  { text: "TypeScript", value: 73 },
  { text: "JavaScript", value: 40 },
  { text: "Dart", value: 100 },
  { text: "Python", value: 25 },
  { text: "Git", value: 95 },
  { text: "React native", value: 100 },
  { text: "Google Analytics 4", value: 95 },
  { text: "Scratch", value: 95 },
  { text: "Unreal engine", value: 40 },
  { text: "Flutter", value: 80 },
  { text: "Godot engine", value: 80 },
];

// Konfigurace pro Word Cloud
const getRotationDegree = () => 0; // Náhodná rotace

const ClientSideWordcloud: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setDimensions({
          width: window.innerWidth * 0.75,
          height: window.innerHeight * 0.75,
        });
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Kontrastní barvy k bílé a zelené
  const colors = useMemo(() => ["#FF4500", " #E7DECD"], []);

  const fontScale = useMemo(
    () =>
      scaleLog({
        domain: [
          Math.min(...skillData.map((w) => w.value)),
          Math.max(...skillData.map((w) => w.value)),
        ],
        range: [10, 100],
      }),
    []
  );

  if (dimensions.width === 0 || dimensions.height === 0) {
    return null; // Or a loading spinner
  }

  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center px-6 min-h-screen text-white"
      style={{ maxWidth: "90%", maxHeight: "90%", overflow: "hidden" }}
    >
      <div className="h-16"></div>
      <div style={{ width: "100%", height: "100%" }}>
        <Wordcloud
          words={skillData}
          width={dimensions.width} // Maximum 75% of viewport width
          height={dimensions.height} // Maximum 75% of viewport height
          fontSize={(datum) => fontScale(datum.value)}
          font={"Impact"}
          spiral={"archimedean"}
          rotate={getRotationDegree}
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <motion.text
                key={w.text}
                fill={colors[i % colors.length]}
                stroke="#000000" // Černý okraj
                strokeWidth={0.5} // Šířka okraje
                paintOrder="stroke"
                textAnchor={"middle"}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
                fontSize={w.size}
                fontFamily={w.font}
              >
                {w.text}
              </motion.text>
            ))
          }
        </Wordcloud>
      </div>
    </div>
  );
};

export default ClientSideWordcloud;
