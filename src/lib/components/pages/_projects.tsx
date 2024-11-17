"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardProject from "@/lib/components/cards/card";
import { CardProjectProps } from "@/lib/utils/interfaces";

interface PortfolioClientSideProps {
    projectDetails: CardProjectProps[]; // Správný typ je pole objektů CardProjectProps
}

export default function PortfolioClientSide({ projectDetails }: PortfolioClientSideProps) {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        // GSAP animace
        gsap.fromTo(
            ".project-card",
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                scrollTrigger: {
                    trigger: ".project-list",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                    once: true,
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
                        techstack={project.techstack}
                    />
                </div>
            ))}
        </div>
    );
}
