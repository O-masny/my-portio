import React from "react";
import Image from "next/image";
import { CardProjectProps } from "@/lib/utils/interfaces";

// Import fontů pro použití
import { bitter, bebas, lora } from "@/styles/global_styles";

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
    <div className="flex flex-row flex-wrap w-full p-6 rounded-lg shadow-lg bg-gray-800 items-center space-x-6">
      {/* Obrázek */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={200}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Textová část */}
      <div className="flex-grow flex flex-row px-6">
        {/* Nadpis */}
        <div className="absolute top-5 right-5">
          {/* Popis */}
          <h2 className={`${bitter.className} text-5xl font-bold text-white`}>
            {title}
          </h2>
          <p className={`${lora.className} text-base text-white opacity-80`}>
            {description}
          </p>
          <div className="px-6 flex justify-center align-middle
        ">
            <h3 className={`${bebas.className} text-lg py-6  px-2 font-semibold text-white`}>
              Tech Stack
            </h3>
            <p className={`${lora.className} py-6  text-white opacity-80`}>{techstack}</p>

          </div>
          {githubLink && (
            <div className="flex items-center space-x-2 justify-center">
              <Image
                src="/icons/github.webp"
                alt="GitHub"
                width={48}
                height={48}
                className="object-cover"
              />
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bebas.className} text-green-500 underline`}
              >
                GitHub Repository
              </a>
            </div>
          )}
          {/* Datum */}
        </div>
        {date && <span className=" absolute right-5 bottom-5 text-sm text-gray-400">{date}</span>}

      </div>
    </div>
  );
}
