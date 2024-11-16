"use client";
import React, { useMemo, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { scaleLog } from "@visx/scale";
import { Wordcloud } from "@visx/wordcloud";
import { skillData } from "@/lib/data/wordcloud_data";


// Konfigurace pro Word Cloud
const getRotationDegree = () => 0; // Náhodná rotace

const ClientSideWordcloud: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);
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
      <div>
        <h1 className="text-xl font-bold my-8 space-y-6 text-center relative z-10">
          Im <span className="text-5xl">mobile dev</span> that likes to work with
        </h1>{" "}
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
    </div>
  );
};

export default ClientSideWordcloud;
