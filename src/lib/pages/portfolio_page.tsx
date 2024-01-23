"use-client";
import { projectDetails } from "../constats/about_me";
import CardProject from "../components/card";
import React from "react";
import "../../styles/portfolio.css";

export default function PortfolioCardGrid() {
  return (
    <div id="Projects" className="project">
      {React.Children.toArray(
        projectDetails.map(
          ({ title, description, techstack, previewLink, githubLink }) => (
            <CardProject />
          )
        )
      )}
    </div>
  );
}
