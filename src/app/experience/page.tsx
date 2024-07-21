import Timeline from "@/lib/components/utils/flower";
import ClientSideWordcloud from "@/lib/pages/_wordcloud";
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

const ServerSideWordcloud: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-end min-h-screen text-white bg-gradient-to-r from-white to-green-800 overflow-hidden">
      <Timeline />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black rounded-b-full"></div>
      </div>
      <div className=""></div>
      <h1 className="text-xl font-bold my-8 space-y-6 text-center relative z-10">
        Im <span className="text-5xl">mobile dev</span> that likes to work with
      </h1>{" "}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
      <div className="w-full h-full flex items-center justify-center relative z-10">
        <ClientSideWordcloud />
      </div>{" "}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent opacity-85"></div>
    </div>
  );
};

export default ServerSideWordcloud;
