// lib/animations/animatePageInOut.ts
"use client"
import gsap from "gsap";
import { useRouter } from "next/navigation"; // Import správného hooku useRouter z next/navigation
import { useEffect } from "react";

// Přejmenujeme animaci do custom hooku s názvem useAnimatePageOut
export const useAnimatePageOut = (href: string) => {
    const router = useRouter();

    useEffect(() => {
        const animationWrapper = document.getElementById("transition-element");

        if (animationWrapper) {
            const tl = gsap.timeline();

            tl.set(animationWrapper, {
                xPercent: -100,
                borderTopRightRadius: "50%",
                borderBottomRightRadius: "50%",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
            })
                .to(animationWrapper, {
                    xPercent: 0,
                    duration: 0.8,
                    onComplete: () => {
                        router.push(href); // Správné použití routeru
                    },
                })
                .to(
                    animationWrapper,
                    {
                        borderTopRightRadius: "0",
                        borderBottomRightRadius: "0",
                        duration: 0.4,
                    },
                    "<"
                );
        } else {
            router.push(href);
        }
    }, [href, router]);
};
