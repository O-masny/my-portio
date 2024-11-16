import React from "react";
import Image from "next/image";
import { CardProjectProps } from "../utils/interfaces";



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
    <div className="flex flex-row w-full p-6 bg-gray-900 rounded-lg shadow-lg">
      {/* Polovina pro obrázek */}
      <div className="w-1/2 p-2">
        <Image
          src={image}
          alt={title}
          layout="responsive"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      {/* Polovina pro text */}
      <div className="w-1/2 py-10 flex flex-col space-y-4 justify-between">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
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
        <p className="text-lg text-white opacity-80">{description}</p>
        <div>
          <h3 className="text-lg font-semibold text-white">Tech Stack:</h3>
          <p className="text-white opacity-80">{techstack}</p>
        </div>
        {date && <span className="text-xl text-gray-400">{date}</span>}

        <div className="flex space-x-4 mt-4 ali">
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Live Preview
            </a>
          )}

        </div>
      </div>
    </div>
  );
}