"use client";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { bitter, bebas, globalStyles } from "../../styles/global_styles";
import Image from "next/image";

// Registrace ScrollTrigger pluginu
gsap.registerPlugin(ScrollTrigger);

export default function LandingScreen() {
  // Refy s typováním pro TSX
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const tl = useRef<gsap.core.Timeline>(gsap.timeline({ repeat: -1, yoyo: true })); // Typování pro GSAP Timeline

  useLayoutEffect(() => {
    // Rozdělení textu nadpisu na jednotlivé znaky
    const title = titleRef.current;
    if (title) {
      const titleText = title.textContent || ""; // Ošetření prázdného textu
      title.innerHTML = titleText
        .split("")
        .map(
          (char, i) =>
            `<span class="char" style="opacity:0; display:inline-block;">${char}</span>`
        )
        .join("");

      // Definice animací pomocí GSAP Timeline
      tl.current = gsap
        .timeline({
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
    }

    return () => {
      if (tl.current) tl.current.kill(); // Zrušení timeline při unmount
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen relative overflow-hidden">
      <div className="relative w-full h-screen md:h-auto md:w-1/2 flex items-center justify-center mr-2">
        <Image
          src="/images/white_moon.jpeg"
          alt="Description of image"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-50"
        />
        <div className="absolute inset-0">
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute bottom-0 right-0 z-0"
            style={{
              transform: "translate(50%, 50%) scale(1.5)", // Přesuneme a zvětšíme kruh
            }}
          >
            <circle cx="50" cy="50" r="50" fill="black" />

            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="white"
              fontSize="10"
              className={`${bebas.className}`}
            >
              Vítejte
            </text>
          </svg>
        </div>
      </div>

      <div className="relative flex w-full md:w-1/2 items-center justify-center p-8 title-section">
        <div className="relative z-10 text-center">
          <h1
            ref={titleRef}
            className={`${bebas.className} title text-2xl md:text-4xl font-bold mb-4 text-white`}
          >
            My name is{" "}
            <span className=" text-white text-4xl">Ondřej Masný</span>
          </h1>
          <p
            className={`${bebas.className} text-3xl text-md md:text-lg text-white`}
          >
            Welcome to my <span className="text-white text-2xl">WEB</span>!
          </p>
        </div>
      </div>
    </div>
  );
}
