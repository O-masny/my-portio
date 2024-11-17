"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedIcon: React.FC = () => {
    const [show, setShow] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollingUp, setScrollingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Zjištění, jestli uživatel scrolluje nahoru
            setScrollingUp(currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);

            // Zobrazí prvek při scrollování nahoru a překročení určité výšky
            if (currentScrollY > 300 && scrollingUp) {
                setShow(true);
            } else if (currentScrollY < 300 || !scrollingUp) {
                setShow(false);
            }
        };

        // Připojení event listeneru na scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY, scrollingUp]);

    useEffect(() => {
        if (show) {
            // Animace pro zobrazení
            gsap.to('.animated-box', {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        } else {
            // Animace pro skrytí
            gsap.to('.animated-box', {
                opacity: 0,
                x: 100,
                y: 100,
                duration: 0.5,
                ease: 'power2.out',
            });
        }
    }, [show]);

    return (
        <div className="min-h-[1500px]">
            <div
                className="animated-box fixed bottom-5 right-5 opacity-0 transform translate-x-[100px] translate-y-[100px] transition-all duration-500 ease-out"
            >
                <div className="bg-black text-white p-5 rounded-lg shadow-lg">
                    I'm the animated box!
                </div>
            </div>
        </div>
    );
};
export default AnimatedIcon;
