import React, { useEffect, useState, useRef, useMemo } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
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
  { text: "Tailwind CSS", value: 60 },
  { text: "Node.js", value: 40 },
  { text: "TypeScript", value: 30 },
  { text: "JavaScript", value: 70 },
  { text: "Python", value: 30 },
  { text: "Git", value: 95 },
  { text: "Mobile dev", value: 100 },
  { text: "Chiller", value: 95 },
  { text: "Flutter", value: 80 },
];

// Konfigurace pro Word Cloud

const getRotationDegree = () => (Math.random() > 0.5 ? 90 : 0); // Náhodná rotace

const ResponsiveWordcloud: React.FC = () => {
  const colors = useMemo(() => ["#143059", "#2F6B9A", "#82a6c2"], []); // Uložení barev do `useMemo`
  const fontScale = useMemo(
    () =>
      scaleLog({
        domain: [
          Math.min(...skillData.map((w) => w.value)),
          Math.max(...skillData.map((w) => w.value)),
        ],
        range: [10, 100], // Rozsah velikostí písma
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
    updateDimensions(); // Aktualizace rozměrů
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateDimensions); // Změna rozměrů při změně velikosti
      return () => {
        window.removeEventListener("resize", updateDimensions); // Odebrání posluchače při odmontování komponenty
      };
    }
  }, [updateDimensions]); // Přidejte `updateDimensions` jako závislost, aby nedocházelo k nadbytečnému rerenderování

  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      <h1 className="text-5xl font-bold my-8 text-center">What I do?</h1>{" "}
      {/* Velký nadpis */}
      <div className="h-32"></div>
      <div ref={containerRef} className="w-full h-full">
        {" "}
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
    </div>
  );
};

export default ResponsiveWordcloud;
