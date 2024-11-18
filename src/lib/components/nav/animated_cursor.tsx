"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Aktivace ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

const FireballAnimation: React.FC = () => {
    const fireballRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (fireballRef.current && sectionRef.current) {
            // Nastavení animace GSAP pro horizontální pohyb
            gsap.fromTo(
                fireballRef.current,
                { x: "-10vw" }, // Výchozí pozice mimo levou část viewportu
                {
                    x: "100vw", // Konečná pozice mimo pravou část viewportu
                    ease: "none", // Žádné zrychlení ani zpomalení
                    scrollTrigger: {
                        trigger: sectionRef.current, // Spouští sekce
                        start: "top top", // Animace začne, když sekce dorazí na vrchol viewportu
                        end: "bottom top", // Animace skončí, když sekce opustí viewport
                        scrub: true, // Pohyb synchronizovaný se scrollováním
                    },
                }
            );
        }
    }, []);

    return (
        <div
            ref={sectionRef}
            style={{
                height: "50vh", // Zvýšená výška pro zajištění scrollování
                position: "relative",
            }}
        >
            <div
                className="fireball"
                ref={fireballRef}
                style={{
                    position: "absolute", // Umožňuje přesun po ose x
                    top: "50%", // Vertikální vycentrování
                    transform: "translateY(-50%)", // Korekce vycentrování
                }}
            ></div>
        </div>
    );
};

export default FireballAnimation;
