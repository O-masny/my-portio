import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Aktivace ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

const FireballAnimation: React.FC = () => {
    const fireballRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(window.innerWidth < 768);

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
        if (fireballRef.current && sectionRef.current) {
            // Dynamické hodnoty pro start a end pro různé velikosti obrazovky
            const start = isSmallScreen ? "top+=50% top" : "top+=50% top"; // Začátek v polovině obrazovky
            const end = isSmallScreen ? "bottom+=50% top" : "bottom top"; // Konec sekce

            gsap.to(fireballRef.current, {
                backgroundPositionX: 0,
                x: "80vw", // Konečná pozice mimo pravou část viewportu
                ease: "none", // Žádné zrychlení ani zpomalení
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: start,
                    end: end,
                    scrub: 1.5, // Zpomalení animace
                    invalidateOnRefresh: true, // Povolí přepočet při obnově
                },
            });
        }
    }, [isSmallScreen]); // Znovu se spustí, když se změní velikost obrazovky

    return (
        <div
            ref={sectionRef}
            style={{
                height: "50vh", // Zvýšení výšky sekce pro lepší zajištění viditelnosti
                position: "relative",
            }}
        >
            <div
                className="fireball"
                ref={fireballRef}

            ></div>
        </div>
    );
};

export default FireballAnimation;
