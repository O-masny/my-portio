'use client';
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

        if (containerRef.current) {
            const elements = containerRef.current.querySelectorAll('p');

            gsap.from(elements, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 60%",
                    end: "bottom top",
                    scrub: true,
                    toggleActions: "play reverse play reverse",
                    markers: false, // Zapněte pro ladění
                    onRefresh: () => ScrollTrigger.refresh
                },
                autoAlpha: 0,
                x: -200, // Posun doleva
                stagger: 0.2, // Každý element se objeví s odstupem
                ease: "power3.out",
            });

            // Refreš ScrollTrigger po načtení stránky
            ScrollTrigger.refresh();
        }
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
