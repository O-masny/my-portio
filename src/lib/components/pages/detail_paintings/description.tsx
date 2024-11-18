import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './style.module.css';

const phrases: string[] = [
    "Los Flamencos National Reserve",
    "is a nature reserve located",
    "in the commune of San Pedro de Atacama",
    "The reserve covers a total area",
    "of 740 square kilometres (290 sq mi)"
];

const Description: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Using gsap.matchMedia() to handle responsiveness
        let mm = gsap.matchMedia();

        // Add a media query. This will run the associated function when the media query matches.
        mm.add("(min-width: 800px)", () => {
            // This setup code runs when the viewport is at least 800px wide
            if (containerRef.current) {
                const elements = containerRef.current.querySelectorAll('p');

                gsap.from(elements, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center", // When it reaches the center of the viewport
                        end: "bottom top",   // When it goes out of view from the top
                        scrub: 1,            // Smooth linking with the scroll
                        toggleActions: "play reverse play reverse", // Play animation when scrolling down and reverse when scrolling up
                        markers: false, // Set to true to show debugging markers
                    },
                    autoAlpha: 0,   // Starting opacity
                    x: -200,        // Moving from left to right
                    stagger: 0.2,   // Staggered animation for each <p>
                    ease: "power3.out", // Smooth easing
                });
            }
        });

        // Optionally, add another query for a smaller screen size
        mm.add("(max-width: 799px)", () => {
            // This setup code runs when the viewport is less than 800px wide (for smaller screens)
            if (containerRef.current) {
                const elements = containerRef.current.querySelectorAll('p');

                gsap.from(elements, {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 90%",  // Adjust start position for smaller screens
                        end: "bottom top",
                        scrub: 1,
                        toggleActions: "play reverse play reverse",
                        markers: false,
                    },
                    autoAlpha: 0,
                    y: 50,            // Animate vertically for mobile
                    stagger: 0.1,
                    ease: "power3.out",
                });
            }
        });

        // Cleanup function (optional)
        return () => {
            // If we want to clean up after the media query stops matching
            mm.revert();
        };
    }, []);

    return (
        <div ref={containerRef} className={styles.description}>
            {phrases.map((phrase, index) => (
                <p key={index}>{phrase}</p>
            ))}
        </div>
    );
};

export default Description;
