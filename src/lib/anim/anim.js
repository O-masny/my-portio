import { gsap } from "gsap";
export const opacity = {

    initial: {

        opacity: 0

    },

    enter: {

        opacity: 0.75,

        transition: { duration: 1, delay: 0.2 }

    },

}



export const slideUp = {

    initial: {

        top: 0

    },

    exit: {

        top: "-100vh",

        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }

    }

}
gsap.to(".char", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".title-section",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});
