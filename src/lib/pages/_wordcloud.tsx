"use client";
import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { scaleLog } from "@visx/scale";
import { Wordcloud } from "@visx/wordcloud";

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
];

// Konfigurace pro Word Cloud
const getRotationDegree = () => 0; // Náhodná rotace

const ClientSideWordcloud: React.FC = () => {
  const colors = useMemo(() => ["#143059", "#2F6B9A", "#82a6c2"], []);
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  const updateDimensions = useMemo(
    () => () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    },
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => {
        window.removeEventListener("resize", updateDimensions);
      };
    }
  }, [updateDimensions]);

  return (
    <div
      id="experience"
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      {/* Responzivní kontejner */}
      <Wordcloud
        words={skillData}
        width={dimensions.width} // Dynamická šířka
        height={dimensions.height} // Dynamická výška
        fontSize={(datum) => fontScale(datum.value)}
        font={"Impact"}
        spiral={"archimedean"}
        rotate={getRotationDegree} // Náhodná rotace
      >
        {(cloudWords) =>
          cloudWords.map((w, i) => (
            <motion.text
              key={w.text}
              fill={colors[i % colors.length]} // Použití memorovaných barev
              textAnchor={"middle"}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`} // Pozice a rotace
              fontSize={w.size} // Velikost písma
              fontFamily={w.font} // Rodina písem
            >
              {w.text}
            </motion.text>
          ))
        }
      </Wordcloud>
    </div>
  );
};

export default ClientSideWordcloud;
