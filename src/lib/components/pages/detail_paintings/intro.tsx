'use client';
import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import { paintingsData } from '@/lib/data/data';
import { Painting } from '@/lib/utils/interfaces';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './style.module.css';

export default function Intro({ params }: { params: Painting }) {
    const painting = paintingsData.find((p) => p.id === params.id);

    if (!painting) {
        return <div>Painting not found</div>;
    }

    const background = useRef<HTMLDivElement | null>(null);
    const introImage = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: document.documentElement, // Attach to the whole document
                scrub: true,
                start: "top", // Start animation when scrolling begins
                end: "+=500px", // End animation after 500px of scrolling
            },
        });

        timeline
            // Expand and move the background image
            .to(background.current, {
                scale: 1.2, // Slightly zoom in
                y: -100, // Move upwards
                ease: "power2.out",
            })
            // Reduce the height of the intro image
            .to(introImage.current, {
                height: "400px",
                ease: "power2.out",
            }, 0); // Sync with background animation
    }, []);

    return (
        <div className={styles.homeHeader}>
            {/* Background Image */}
            <div className={styles.backgroundImage} ref={background}>
                <Image
                    src={'/images/white_moon.jpeg'}
                    fill={true}
                    alt="background image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                />
            </div>
            {/* Intro Section */}
            <div className={styles.intro}>
                <div ref={introImage} data-scroll data-scroll-speed="0.3" className={styles.introImage}>
                    <Image
                        src={painting.imageUrl}
                        alt="intro image"
                        fill={true}
                        priority={true}
                    />
                </div>
                <h1 data-scroll data-scroll-speed="0.7">
                    {painting.title}
                </h1>
            </div>
        </div>
    );
}
