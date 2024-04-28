import React from "react";
import Image from "next/image";

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
    <div
      className="flex flex-row w-full p-6"
      style={{
        background: "radial-gradient(circle at center, #00000, #d7d4cf)", // Radialní gradient
        borderRadius: "25px", // Zaoblené rohy
        border: "1px solid rgba(0, 0, 0, 1)", // Tenká linka
        color: "white",
      }}
    >
      {/* Polovina pro obrázek */}
      <div className="w-1/2 p-2">
        <Image
          src={image} // Odkaz na obrázek
          alt={title}
          layout="responsive" // Zajišťuje responzivní zobrazení
          width={300} // Šířka pro Next.js
          height={300} // Výška pro Next.js
          className="rounded " // Ověření správného stylu
        />
      </div>

      {/* Polovina pro text */}
      <div className="w-1/2 py-10 flex flex-col space-y-6 justify-start">
        {" "}
        {/* Posunutí textu výše */}
        <h2 className="text-4xl font-bold">{title}</h2>{" "}
        <span className="text-xl text-gray-300 mt-2">{date}</span>{" "}
        {/* Mírně snížená intenzita šedé */}
        <p className="text-lg text-white opacity-80">{description}</p>
      </div>
    </div>
  );
}
