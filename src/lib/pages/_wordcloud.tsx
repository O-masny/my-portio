"use client";
import React, { useMemo } from "react";
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
  { text: "Godot engine", value: 80 },
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
          width={window.innerWidth * 0.75} // Maximum 75% of viewport width
          height={window.innerHeight * 0.75} // Maximum 75% of viewport height
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
