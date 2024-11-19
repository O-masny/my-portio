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
            if (containerRef.current) {
                const elements = containerRef.current.querySelectorAll('p');

                gsap.fromTo(
                    containerRef.current.children, // Získáme všechny děti, které jsou p
                    {
                        opacity: 0, // Začíná s opacity 0
                        x: 50, // Začíná 100px vpravo
                    },
                    {
                        opacity: 1,
                        x: 0, // Konec na pozici 0 (tedy původní)
                        duration: 1, // Délka animace v sekundách
                        stagger: 0.3, // Zpoždění mezi jednotlivými animacemi (stagger pro každý prvek)
                    }
                );
            }
        });

        // Optionally, add another query for a smaller screen size
        mm.add("(max-width: 799px)", () => {
            // This setup code runs when the viewport is less than 800px wide (for smaller screens)
            if (containerRef.current) {
                const elements = containerRef.current.querySelectorAll('p');


                gsap.fromTo(
                    containerRef.current.children, // Získáme všechny děti, které jsou p
                    {
                        opacity: 0, // Začíná s opacity 0
                        x: 100, // Začíná 100px vpravo
                    },
                    {
                        opacity: 1, // Konec s opacity 1
                        x: 0, // Konec na pozici 0 (tedy původní)
                        duration: 1, // Délka animace v sekundách
                        stagger: 0.3, // Zpoždění mezi jednotlivými animacemi (stagger pro každý prvek)
                    }
                );
            }
        });

        // Cleanup function (optional)
        return () => {
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
