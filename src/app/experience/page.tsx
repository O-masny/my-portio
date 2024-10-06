import ClientSideWordcloud from "@/lib/pages/_wordcloud";
import React from "react";
import dynamic from "next/dynamic";

const Flower = dynamic(
  () => import('@/lib/components/utils/components/flower'),
  { ssr: false }
)

const ExperiencePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-end min-h-screen text-white bg-gradient-to-r from-white to-green-800 overflow-hidden">
      <Flower />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-black rounded-b-full"></div>
      </div>

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

export default ExperiencePage;
