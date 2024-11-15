"use client"
import gsap from "gsap";

export const animatePageIn = () => {
    const transitionElement = document.getElementById("transition-element");

    if (transitionElement) {
        const tl = gsap.timeline();

        tl.set(transitionElement, {
            xPercent: 0,
        })
            .to(transitionElement, {
                xPercent: 100,
                duration: 0.8,
            })
            .to(
                transitionElement,
                {
                    borderTopLeftRadius: "50vh",
                    borderBottomLeftRadius: "50vh",
                    duration: 0.4,
                },
                "<"
            );
    }
};
