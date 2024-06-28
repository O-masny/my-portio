import React from "react";

// Datový typ pro Word Cloud
interface WordData {
  text: string;
  value: number;
}

// Data pro Word Cloud
const skillData: WordData[] = [
  { text: "React", value: 60 },
  { text: "Next.js", value: 75 },
  { text: "Teacher", value: 69 },
  { text: "Tailwind CSS", value: 60 },
  { text: "Node.js", value: 40 },
  { text: "TypeScript", value: 73 },
  { text: "JavaScript", value: 40 },
  { text: "Python", value: 25 },
  { text: "Git", value: 95 },
  { text: "Painter", value: 100 },
  { text: "Google Analytics 4", value: 95 },
  { text: "Flutter", value: 80 },
];

// Konfigurace pro Word Cloud
const getRotationDegree = () => 0; // Náhodná rotace

const ServerSideWordcloud: React.FC = () => {
  return (
    <div
      id="experience"
      className="flex flex-col items-center justify-center min-h-screen text-white"
    >
      <h1 className="text-xl font-bold my-8 text-center">
        Im <span className="text-5xl">mobile dev</span> that likes to work with
      </h1>
      <div className="w-full h-full flex items-center justify-center">
        {/* Statické vykreslení */}
        {skillData.map((w, i) => (
          <div
            key={w.text}
            style={{
              fontSize: `${10 + (w.value / 100) * 90}px`,
              fontFamily: "Impact",
              transform: `rotate(${getRotationDegree()}deg)`,
              color: ["#143059", "#2F6B9A", "#82a6c2"][i % 3],
              margin: "5px",
            }}
          >
            {w.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerSideWordcloud;
