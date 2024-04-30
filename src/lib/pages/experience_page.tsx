import React, { useEffect, useState, useRef } from "react";
import { Text } from "@visx/text";
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
const colors = ["#143059", "#2F6B9A", "#82a6c2"]; // Barvy pro slova
const fontScale = scaleLog({
  domain: [
    Math.min(...skillData.map((w) => w.value)),
    Math.max(...skillData.map((w) => w.value)),
  ],
  range: [10, 100], // Rozsah velikostí písma
});

const getRotationDegree = () => (Math.random() > 0.5 ? 90 : 0); // Náhodná rotace (svislá nebo vodorovná)

const ResponsiveWordcloud: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 500, height: 500 });

  // Získat rozměry jednou a použít useCallback, aby se zabránilo přerenderování při scrollování
  const updateDimensions = () => {
    if (containerRef.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      setDimensions({ width: clientWidth, height: clientHeight });
    }
  };

  useEffect(() => {
    updateDimensions(); // Aktualizace rozměrů jednou
    window.addEventListener("resize", updateDimensions); // Přidání posluchače události pro změnu velikosti
    return () => {
      window.removeEventListener("resize", updateDimensions); // Odebrání posluchače při odmontování komponenty
    };
  }, []); // Prázdný závislý seznam, aby se zabránilo přerenderování

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-5xl font-bold my-8 text-center">What I do?</h1>{" "}
      {/* Velký nadpis */}
      <div className="h-32"></div>
      <div ref={containerRef} className="w-full h-full flex space-y-6">
        <Wordcloud
          words={skillData} // Vlastní data pro Word Cloud
          width={dimensions.width} // Dynamická šířka
          height={dimensions.height} // Dynamická výška
          fontSize={(datum) => fontScale(datum.value)} // Velikost písma
          font={"Impact"}
          spiral={"archimedean"}
          rotate={getRotationDegree} // Náhodná rotace
        >
          {(cloudWords) =>
            cloudWords.map((w, i) => (
              <Text
                key={w.text}
                fill={colors[i % 3]} // Barvy pro slova
                textAnchor={"middle"}
                transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`} // Pozice a rotace
                fontSize={w.size}
                fontFamily={w.font} // Rodina písem
              >
                {w.text}
              </Text>
            ))
          }
        </Wordcloud>
      </div>
    </div>
  );
};

export default ResponsiveWordcloud;
