"use client"
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Aktivace ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

const FireballAnimation: React.FC = () => {
    const fireballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (fireballRef.current) {
            // Animace s ScrollTrigger a závislost na scrollY
            gsap.to(fireballRef.current, {
                ease: 'none',
                x: 900, // Posun doleva

                scrollTrigger: {
                    trigger: "fireball", // Element, který spustí scroll trigger
                    start: "top 80%",
                    end: "bottom 10%",
                    scrub: 1, // Plynulý pohyb s pomalejším efektem
                    invalidateOnRefresh: true, // Při každém znovu načtení triggeru se nastaví nová hodnota
                },
            });
        }
    }, []);

    return (
        <div style={{ height: '40vh', width: "100wv", position: 'relative' }}>
            <div className='fireball'
                ref={fireballRef}

            ></div>
        </div>
    );
};

export default FireballAnimation;
