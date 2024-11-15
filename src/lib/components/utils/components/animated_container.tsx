"use client"
import { useEffect, ReactNode } from 'react';
import { gsap } from 'gsap';
import { AnimatedSectionProps } from '@/lib/interfaces';


const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    className,
    animationDuration = 1, // Výchozí hodnota
    triggerPoint = 'top center', // Výchozí výchozí bod
    customAnimation,
}) => {
    useEffect(() => {
        const element = document.querySelector(`.${className}`) as HTMLElement;

        // Zajištění, že element existuje
        if (element) {
            // Použití vlastní animace, pokud je poskytnuta
            if (customAnimation) {
                customAnimation(element);
            } else {
                // Výchozí GSAP animace
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 50 }, // Výchozí stav
                    {
                        opacity: 1,
                        y: 0,
                        duration: animationDuration,
                        scrollTrigger: {
                            trigger: element,
                            start: triggerPoint,
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        }

        // Cleanup
        return () => {
            if (element) {
                gsap.killTweensOf(element);
            }
        };
    }, [className, animationDuration, triggerPoint, customAnimation]);

    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default AnimatedSection;
