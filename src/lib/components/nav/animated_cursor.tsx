import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Aktivace ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

const FireballAnimation: React.FC = () => {
    const fireballRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(
        window.innerWidth < 768
    );

    useEffect(() => {
        // Funkce pro detekci změny velikosti obrazovky
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        // Poslech změny velikosti okna
        window.addEventListener("resize", handleResize);

        // Úklid při odpojení komponenty
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (fireballRef.current && textRef.current && sectionRef.current) {
            // Dynamické hodnoty pro start a end pro různé velikosti obrazovky
            const start = isSmallScreen ? "top center" : "top center"; // Start ve středu viewportu
            const end = isSmallScreen ? "bottom top" : "bottom top"; // Konec animace na konci sekce

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: start,
                    end: end,
                    scrub: 1.5, // Zpomalení animace
                    invalidateOnRefresh: true, // Povolí přepočet při obnově
                },
            });

            // Animace ohnivé koule
            timeline.to(fireballRef.current, {
                x: "80vw", // Konečná pozice mimo pravou část viewportu
                ease: "none", // Žádné zrychlení ani zpomalení
            });

            // Animace textu (následuje ohnivou kouli)
            timeline.to(
                textRef.current,
                {
                    x: "80vw", // Shodná hodnota jako u ohnivé koule
                    ease: "none", // Žádné zrychlení ani zpomalení
                },
                "<" // Spuštění animace textu ve stejný čas jako ohnivá koule
            );
        }
    }, [isSmallScreen]); // Znovu se spustí, když se změní velikost obrazovky

    return (
        <div
            ref={sectionRef}
            className="relative h-[75vh] bg-black overflow-hidden" // Výška maximálně polovina obrazovky
        >
            <div
                className="fireball absolute top-[50%] left-0 w-16 h-16 bg-red-500 rounded-full"
                ref={fireballRef}
            ></div>
            <div
                className="text absolute top-[50%] left-0 text-white font-bold text-xl"
                ref={textRef}
            >
                Contact me
            </div>
        </div>
    );
};

export default FireballAnimation;
