// components/HorizontalScroll.tsx
import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;  // Typ pro children
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const boxes = document.querySelectorAll('.box');
      const totalWidth = -100 * (boxes.length - 1);

      const animation = gsap.to('.horizontal-content', {
        xPercent: totalWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal-scroll',
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: true,
        }
      });

      // Cleanup
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
