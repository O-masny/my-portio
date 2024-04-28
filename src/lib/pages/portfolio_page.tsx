import React from "react";
import CardProject from "../components/card";
import { projectDetails } from "../constats/about_me"; // Seznam projektů s detaily

export default function PortfolioCardGrid() {
  return (
    <div className="flex flex-col items-center w-full">
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
