"use client"
import gsap from "gsap";


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
type FlowerAnimationParams = {
  container: HTMLElement | null;
  circles: SVGCircleElement[];
  paths: SVGPathElement[];
}; export const flowerAnimation = ({ container, circles, paths }: FlowerAnimationParams) => {
  if (!container) return; // Kontrola existence kontejneru

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  });

  // Animace kruhů
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

  // Animace cest
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

  // Finální zvětšení
  tl.to(container, {
    scale: 1.1,
    duration: 1.5,
    ease: "power2.out",
  });
};

export const wreathAnimation = (wreathContainer: HTMLElement | null) => {
  if (!wreathContainer) return; // Safety check to ensure the container exists

  const circles = wreathContainer.querySelectorAll<SVGCircleElement>(".wreath-circle");

  if (circles.length === 0) return; // Ensure SVG circles exist

  // Create a GSAP timeline for each circle
  const tl = gsap.timeline({
    yoyo: true,
    scrollTrigger: {
      trigger: wreathContainer,
      scrub: true, // Smooth scroll effect
    },
  });

  circles.forEach((circle) => {
    const radius = parseFloat(circle.getAttribute("r") || "0");
    tl.fromTo(
      circle,
      {
        strokeDasharray: radius * Math.PI * 2, // Circumference
        strokeDashoffset: radius * Math.PI * 2,
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        stagger: {
          amount: 0.3, // Adjust timing between each circle
        },
      }
    );
  });
};