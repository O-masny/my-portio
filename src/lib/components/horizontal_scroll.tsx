"use client"
import { useEffect, ReactNode, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HorizontalScrollProps } from '@/lib/utils/interfaces';



const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null); // Reference pro obalovací element
  const contentRef = useRef<HTMLDivElement>(null); // Reference pro horizontální obsah

  useEffect(() => {
    if (scrollRef.current && contentRef.current) {
      const boxes = contentRef.current.children; // Přímý přístup k dětem obsahu
      const totalWidth = -100 * (boxes.length - 1);

      const animation = gsap.to(contentRef.current, {
        xPercent: totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: scrollRef.current, // Použití `scrollRef` jako triggeru
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: true,
        },
      });

      // Cleanup animací
      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);
  return (
    <div className="horizontal-scroll">
      <div className="horizontal-content">
        {children}  {/* Zde se renderuje obsah children */}
      </div>
    </div>
  );
};

export default HorizontalScroll;
