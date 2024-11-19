"use client";
import React, { useState, useLayoutEffect, useRef } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Painting } from '@/lib/utils/interfaces';


export default function Pictures({ params }: { params: Painting }) {
    const projects = [
        { title: "Salar de Atacama", src: params.imageUrl },
        { title: "Valle de la luna", src: "/images/pic2.jpeg" },
        { title: "Miscanti Lake", src: "/images/pic5.jpeg" },
        { title: "Miniques Lagoons", src: "/images/pic4.jpeg" },
    ];

    const [selectedProject, setSelectedProject] = useState(0);
    const container = useRef(null);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const imagePin = imageContainer.current;

        // Get the screen width to adjust scroll speed and behavior for mobile
        const isMobile = window.innerWidth <= 768;

        const scrollSpeed = isMobile ? 0.2 : 1; // Slower scroll speed on mobile
        const endPin = isMobile ? "+=10%" : "+=40%"; // Adjust the end point on mobile

        // Pin the image container with GSAP for smooth scrolling
        gsap.fromTo(imagePin,
            { y: 0 },
            {
                y: isMobile ? "60vh" : "80vh", // Move the image down by 100% of the viewport height while scrolling
                ease: "none",
                scrollTrigger: {
                    trigger: imagePin,
                    pin: true, // Pin the image
                    start: "top top", // Pin when the top of the image container hits the top of the viewport
                    end: endPin, // End pinning after a percentage of the viewport height
                    scrub: scrollSpeed, // Smooth scrubbing effect
                    markers: false, // For debugging, remove in production
                    toggleActions: "play none none none", // Control the pinning action
                    anticipatePin: 1, // Anticipate the pin to avoid flickering/restarts
                    pinReparent: true, // Ensure the container is pinned relative to the scroll container
                }
            }
        );
    }, []);

    const handleMouseOver = (index: number) => {
        setSelectedProject(index);
    };

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image
                        src={`${projects[selectedProject].src}`}
                        alt="project image"
                        layout="fill" // Use fill to ensure the image scales correctly
                        objectFit="cover" // Ensure the image covers the container without distortion
                        priority={true}
                    />
                </div>
                <div className={styles.column}>
                    <p>The flora is characterized by the presence of high elevation wetland, as well as yellow straw, broom sedge, tola de agua and tola amaia.</p>
                </div>
                <div className={styles.column}>
                    <p>Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.</p>
                </div>
            </div>

            <div className={styles.projectList}>
                {
                    projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                onMouseOver={() => handleMouseOver(index)}
                                className={styles.projectEl}
                            >
                                <h2>{project.title}</h2>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}
