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
                    start: "bottom 50%",
                    end: "bottom 20%",
                    scrub: 1, // Plynulé propojení scrollu a animace
                    toggleActions: "play none none reverse",
                    markers: false, // Zapněte pro ladění
                },
                autoAlpha: 0,
                x: -200,
                stagger: 0.2, // Postupné zobrazování
                ease: "power3.out",
            });

            ScrollTrigger.refresh(); // Zajistí správnou inicializaci při načtení stránky
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
