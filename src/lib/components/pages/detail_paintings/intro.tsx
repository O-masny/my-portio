'use client';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { Painting } from '@/lib/utils/interfaces';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';

export default function Intro({ params }: { params: Painting }) {



    const background = useRef<HTMLDivElement | null>(null);
    const introImage = useRef<HTMLDivElement | null>(null);

    // Efekt spouštěný při zobrazení komponenty
    useLayoutEffect(() => {
        if (!params != null) return; // Zajistíme, že animace bude probíhat jen pokud je painting definován

        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: background.current, // Attach to the whole document
                scrub: true,
                start: "top", // Start animation when scrolling begins
                end: "+=500px", // End animation after 500px of scrolling
            },
        });

        timeline
            // Expand and move the background image
            .to(background.current, {
                scale: 0.8, // Slightly zoom in
                y: -100, // Move upwards
                ease: "power2.out",
            })
            // Reduce the height of the intro image
            .to(introImage.current, {
                height: "400px",
                ease: "power2.out",
            }, 0); // Sync with background animation
    }, [params]); // Přidáme painting jako závislost

    return (
        <div className={styles.homeHeader}>
            {/* Background Image */}
            <div className={styles.backgroundImage} ref={background}>
                <Image
                    src={params.imageUrl}
                    fill={true}
                    alt="background image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                />
            </div>
            {/* Intro Section */}
            <div className={styles.intro}>

                <h1 data-scroll data-scroll-speed="0.7">
                    {params.title}
                </h1>
            </div>
        </div>
    );
}
