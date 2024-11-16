import React from "react";
import Image from "next/image";
import { CardProjectProps } from "@/lib/utils/interfaces";

export default function CardProject({
  image,
  title,
  description,
  date,
  techstack,
  previewLink,
  githubLink,
}: CardProjectProps) {
  return (
    <div className="flex flex-row w-3/4 p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Polovina pro obrázek */}
      <div className="w-1/2 p-2">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={300}
          height={300}
          className="rounded-lg animate-pulse-image"
        />
      </div>

      {/* Polovina pro text */}
      <div className="w-1/2 py-10 flex flex-col space-y-4">
        {/* Nadpis */}
        <h2 className="text-4xl font-bold text-white">{title}</h2>

        {/* Odkaz na GitHub */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline"
          >
            GitHub Repository
          </a>
        )}

        {/* Popis */}
        <p className="text-lg text-white opacity-80">{description}</p>

        {/* Tech stack */}
        <div>
          <h3 className="text-lg font-semibold text-white">Tech Stack:</h3>
          <p className="text-white opacity-80">{techstack}</p>
        </div>

        {/* Datum zarovnané dolů */}
        {date && <span className="text-xl text-gray-400 mt-auto">{date}</span>}

        {/* Odkaz na Live Preview */}
        {previewLink && (
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mt-4"
          >
            Live Preview
          </a>
        )}
      </div>
    </div>
  );
}
