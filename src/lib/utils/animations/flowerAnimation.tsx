"use client"
import gsap from "gsap";

type FlowerAnimationParams = {
    container: HTMLElement | null;
    circles: SVGCircleElement[];
    paths: SVGPathElement[];
};

export const flowerAnimation = ({ container, circles, paths }: FlowerAnimationParams) => {
    if (!container) return;

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
    });

    circles.forEach((circle, index) => {
        const length = circle.getTotalLength();
        tl.fromTo(
            circle,
            {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0,
            },
            {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1,
                ease: "power1.out",
                delay: index * 0.1,
            }
        );
    });

    paths.forEach((path, index) => {
        const length = path.getTotalLength();
        tl.fromTo(
            path,
            {
                strokeDasharray: length,
                strokeDashoffset: length,
                opacity: 0,
            },
            {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power1.out",
                delay: index * 0.15,
            }
        );
    });

    tl.to(container, {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out",
    });
};
