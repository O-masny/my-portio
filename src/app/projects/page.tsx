import { projectDetails } from "@/lib/data/about_me";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardProject from "@/lib/components/cards/card";

export default function PortfolioCardGrid() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animate the cards when they enter the viewport using ScrollTrigger
    gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 100, // Start from below
      },
      {
        opacity: 1,
        y: 0, // Move to original position
        duration: 1,
        stagger: 0.3, // Stagger the animations for each card
        scrollTrigger: {
          trigger: ".project-list", // Trigger when the list is in the viewport
          start: "top 80%", // Start animation when the top of the card is 80% visible
          end: "bottom 20%", // End when the bottom is 20% visible
          scrub: true, // Smooth animation with scroll
          once: true, // Animation happens only once
        },
      }
    );
  }, []);

  return (
    <div className="project-list flex flex-col gap-8 p-6">
      {projectDetails.map((project, index) => (
        <div key={index} className="project-card">
          <CardProject
            image={project.image}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            date="2024"
            techstack={project.techstack} />
        </div>
      ))}
    </div>
  );
}