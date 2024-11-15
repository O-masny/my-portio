// lib/animations/wreathAnimation.ts
import gsap from "gsap";

export const wreathAnimation = (wreathContainer: HTMLElement | null) => {
    if (!wreathContainer) return;

    const circles = wreathContainer.querySelectorAll<SVGCircleElement>(".wreath-circle");

    if (circles.length === 0) return;

    const tl = gsap.timeline({
        yoyo: true,
        scrollTrigger: {
            trigger: wreathContainer,
            scrub: true,
        },
    });

    circles.forEach((circle) => {
        const radius = parseFloat(circle.getAttribute("r") || "0");
        tl.fromTo(
            circle,
            {
                strokeDasharray: radius * Math.PI * 2,
                strokeDashoffset: radius * Math.PI * 2,
                opacity: 0,
            },
            {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 2,
                ease: "power1.out",
                stagger: {
                    amount: 0.3,
                },
            }
        );
    });
};
