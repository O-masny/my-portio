"use client";
import React, { useState, useLayoutEffect, useRef, useEffect } from 'react';
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Painting } from '@/lib/utils/interfaces';
import { paintingsData } from '@/lib/data/data';
import Link from 'next/link';

export default function Pictures({ params }: { params: Painting }) {
    const [randomPaintings, setRandomPaintings] = useState<Painting[]>([]);
    const [selectedProject, setSelectedProject] = useState(0);
    const [currentImageUrl, setCurrentImageUrl] = useState(params.imageUrl); // Default image
    const [isMobile, setIsMobile] = useState<boolean | null>(null); // State to track mobile device status

    const container = useRef(null);
    const imageContainer = useRef(null);
    const textContainer = useRef(null);  // Ref for the text container

    const currentPaintingId = params.id;

    const getRandomPaintings = () => {
        const otherPaintings = paintingsData.filter(
            (painting) => painting.id !== currentPaintingId
        );

        // Shuffle paintings and take the first 4
        return otherPaintings.sort(() => 0.5 - Math.random()).slice(0, 4);
    };

    useEffect(() => {
        setRandomPaintings(getRandomPaintings());
    }, [currentPaintingId]);

    // Update isMobile when the window is resized or on initial mount
    useEffect(() => {
        const checkIsMobile = window.innerWidth <= 768;
        setIsMobile(checkIsMobile);

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Runs only once on mount and updates when window size changes

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const imagePin = imageContainer.current;
        const textPin = textContainer.current;

        const scrollSpeed = isMobile ? 0.2 : 1;
        const endPin = isMobile ? "+=10%" : "+=40%";

        if (isMobile === null) return; // Ensure that we wait for `isMobile` to be set

        // Scroll-triggered image movement (parallax effect)
        gsap.fromTo(imagePin,
            { y: 0 },
            {
                y: isMobile ? "100vh" : "80vh",
                ease: "none",
                scrollTrigger: {
                    trigger: imagePin,
                    pin: true,
                    start: "top top",
                    end: endPin,  // Pin image until 40% of the section height (for larger screens)
                    scrub: scrollSpeed,
                    markers: false,
                    toggleActions: "play none none none",
                    anticipatePin: 1,
                    pinReparent: true,
                }
            }
        );

        // Scroll-triggered opacity change for the text container
        gsap.fromTo(textPin,
            { opacity: 1 },
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: textPin,
                    start: "top 60%",  // Fade when the text section reaches 60% of the viewport height
                    end: "bottom top",  // Fade out as the bottom of the text reaches the top of the viewport
                    scrub: 0.3,  // Smooth animation
                    markers: false,
                }
            }
        );
    }, [isMobile]); // Re-run animation setup when `isMobile` changes

    const handleMouseOver = (index: number) => {
        setSelectedProject(index);
        setCurrentImageUrl(randomPaintings[index]?.imageUrl); // Change to hovered painting
    };

    const handleMouseOut = () => {
        setCurrentImageUrl(params.imageUrl); // Revert back to default image
    };

    return (
        <div ref={container} className={styles.projects}>
            <div className={styles.projectDescription}>

                {/* Conditionally render image for non-mobile devices */}
                {!isMobile && (
                    <div ref={imageContainer} className={styles.imageContainer}>
                        <Image
                            src={currentImageUrl} // Dynamically change the image
                            alt="project image"
                            layout="fill" // Use fill to ensure the image scales correctly
                            objectFit="cover" // Ensure the image covers the container without distortion
                            priority={true}
                        />
                    </div>
                )}

                <div className={styles.textContainer}>
                    <p className={styles.leftText}>
                        {params.description}
                    </p>
                    <p className={styles.rightText}>
                        Some, like the southern viscacha, vicuña and Darwins rhea, are classified as endangered species. Others, such as Andean goose, horned coot, Andean gull, puna tinamou and the three flamingo species inhabiting in Chile (Andean flamingo, Chilean flamingo, and Jamess flamingo) are considered vulnerable.
                    </p>
                </div>

            </div>

            <div className={styles.projectList}>
                {randomPaintings.map((painting, index) => (
                    <Link scroll={true} href={`/paintings/${painting.id}`} passHref key={painting.id}>
                        <div
                            onMouseOver={() => handleMouseOver(index)}
                            onMouseOut={handleMouseOut} // Reset image on mouse out
                            className={`${styles.projectEl} ${styles.hoverEffect}`}
                        >
                            <div className={styles.background}></div> {/* White background for animation */}
                            <h2>{painting.title}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
