import CardProject from "@/lib/components/card";
import { projectDetails } from "@/lib/constats/about_me";
import React from "react";

export default function PortfolioCardGrid() {
  return (
    <div id="portfolio" className="flex flex-col items-center w-full h-full">
      <div className="h-32"></div>{" "}
      <div className="py-6 text-3xl">
        <p> My projects</p>
      </div>
      {projectDetails.map((project, index) => (
        <CardProject
          key={index}
          image={project.image} // URL obrázku projektu
          title={project.title} // Název projektu
          description={project.description} // Popis projektu
          date={"project.date"} // Datum projektu
        />
      ))}
    </div>
  );
}
