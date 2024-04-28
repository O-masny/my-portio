import React from "react";
import Image from "next/image"; // Import z Next.js nebo jiné knihovny

interface CardProjectProps {
  image: string; // URL obrázku
  title: string; // Název projektu
  description: string; // Popis projektu
  date: string; // Datum projektu
}

export default function CardProject({
  image,
  title,
  description,
  date,
}: CardProjectProps) {
  return (
    <div className="flex flex-row items-center w-full p-4 border-b border-gray-300">
      {/* Polovina pro obrázek */}
      <div className="w-1/2 p-2">
        <Image
          src={image} // Odkaz na obrázek
          alt={title}
          layout="responsive" // Zajišťuje responzivní zobrazení
          width={300} // Šířka pro Next.js
          height={300} // Výška pro Next.js
          className="rounded" // Ověření správného stylu
        />
      </div>

      {/* Polovina pro text */}
      <div className="w-1/2 p-2 flex flex-col space-y-4 ">
        <h2 className="text-4xl font-bold">{title}</h2>{" "}
        <span className="text-xl text-gray-500 mt-2">{date}</span>
        <p className="text-sm white opacity-75">{description}</p>
      </div>
    </div>
  );
}
