import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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

export const animatePageOut = (href: string, router: AppRouterInstance) => {
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
          router.push(href);
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
    // Fallback if the animation wrapper doesn't exist
    router.push(href);
  }
};
// Vlastní animace pro navbar
const customNavbarAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: -50 },
    { opacity: 1, y: 0, duration: 1 }
  );
};

// Vlastní animace pro footer
const customFooterAnimation = (element: HTMLElement) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  );
};
export const runTitleAnimation = (titleRef: React.RefObject<HTMLHeadingElement>) => {
  const title = titleRef.current;
  if (title) {
    const titleText = title.textContent || ""; // Ošetření prázdného textu
    title.innerHTML = titleText
      .split("")
      .map(
        (char) =>
          `<span class="char" style="opacity:0; display:inline-block;">${char}</span>`
      )
      .join("");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    })
      .to(".char", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
      })
      .to(".char", {
        scale: 1.2,
        rotation: 360,
        duration: 0.5,
        stagger: 0.05,
      })
      .to(".char", {
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: 0.05,
      });

    return tl;
  }
};


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
