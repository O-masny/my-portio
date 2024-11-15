"use client"
import { useEffect, useRef } from "react";
import { flowerAnimation } from "../animations/flowerAnimation";

const FlowerComponent = () => {
  // Refs pro jednotlivé SVG elementy
  const circlesRefs = useRef<(SVGCircleElement | null)[]>([]);
  const pathsRefs = useRef<(SVGPathElement | null)[]>([]);
  const flowerContainerRef = useRef<HTMLDivElement | null>(null);

  // Použití useEffect pro spuštění animace při načtení komponenty
  useEffect(() => {
    // Filtrace validních elementů (nezahrnuje null hodnoty)
    const circles = circlesRefs.current.filter(Boolean) as SVGCircleElement[];
    const paths = pathsRefs.current.filter(Boolean) as SVGPathElement[];

    // Zavolání animace, pokud existuje kontejner a elementy
    if (flowerContainerRef.current) {
      flowerAnimation({
        container: flowerContainerRef.current,
        circles,
        paths,
      });
    }
  }, []); // Tento efekt se spustí pouze při mountování komponenty

  // Funkce pro správu ref pro jednotlivé kruhy
  const setCircleRef = (index: number) => (el: SVGCircleElement | null) => {
    circlesRefs.current[index] = el;
  };

  // Funkce pro správu ref pro jednotlivé cesty
  const setPathRef = (index: number) => (el: SVGPathElement | null) => {
    pathsRefs.current[index] = el;
  };

  return (
    <div ref={flowerContainerRef} className="flower-container">
      <svg className="flower">
        {/* Kružnice */}
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <circle
              key={`circle-${i}`}
              cx="50"
              cy="50"
              r={40 + i * 10}
              ref={setCircleRef(i)} // Použití callback ref pro kruhy
            />
          ))}

        {/* Cesty */}
        {Array(2)
          .fill(null)
          .map((_, i) => (
            <path
              key={`path-${i}`}
              d={`M${50 + i * 10},10 L${90 + i * 10},50 L${50 + i * 10},90 L${10 + i * 10},50 Z`}
              ref={setPathRef(i)} // Použití callback ref pro cesty
            />
          ))}
      </svg>
    </div>
  );
};

export default FlowerComponent;
