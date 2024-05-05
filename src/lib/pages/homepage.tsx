import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import MainPage from "./landing_page";
import { motion } from "framer-motion";
import ContactPage from "./contact_page";
import ResponsiveWordcloud from "./experience_page";
import EducationAndHobbies from "./hobbies";
import PortfolioCardGrid from "./portfolio_page";

// Definice sekcí a jejich identifikátorů
const sections = [
  { name: "main", id: "main", Component: MainPage },
  { name: "experience", id: "experience", Component: ResponsiveWordcloud },
  { name: "education", id: "education", Component: EducationAndHobbies },
  { name: "portfolio", id: "portfolio", Component: PortfolioCardGrid },
  { name: "contact", id: "contact", Component: ContactPage },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null); // Reference na hlavní kontejner
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // Sleduje aktuální index sekce

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    // Inicializace LocomotiveScroll
    const scroll = new LocomotiveScroll({
      el: containerRef.current, // Element, na který aplikujeme LocomotiveScroll
      smooth: true, // Povolit plynulé skrolování
    });

    // Cleanup při demontáži komponenty
    return () => {
      scroll.destroy(); // Zničení instance LocomotiveScroll
    };
  }, []); // Prázdný seznam závislostí pro zajištění, že se zavolá pouze jednou

  // Funkce pro navigaci na další sekci
  const handleScrollToNextSection = () => {
    const nextIndex = currentSectionIndex + 1;
    const nextSection = sections[nextIndex];
    if (nextSection) {
      const targetElement = document.getElementById(nextSection.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" }); // Plynulé skrolování
        setCurrentSectionIndex(nextIndex); // Aktualizace indexu
      }
    }
  };

  // Funkce pro navigaci na předchozí sekci nebo úplně nahoru, pokud je na poslední sekci
  const handleScrollToPreviousSection = () => {
    if (currentSectionIndex === sections.length - 1) {
      // Pokud jsme na poslední sekci, skrolujeme na úplný začátek
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentSectionIndex(0); // Aktualizace indexu
    } else {
      const previousIndex = currentSectionIndex - 1;
      const previousSection = sections[previousIndex];
      if (previousSection) {
        const targetElement = document.getElementById(previousSection.id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Plynulé skrolování
          setCurrentSectionIndex(previousIndex); // Aktualizace indexu
        }
      }
    }
  };

  return (
    <div ref={containerRef}>
      {" "}
      {/* Hlavní kontejner pro LocomotiveScroll */}
      {sections.map((section) => {
        const { Component } = section;
        return (
          <div key={section.name} id={section.id}>
            <Component />
          </div>
        );
      })}
      <FloatingButton
        currentSectionIndex={currentSectionIndex}
        onClickNext={handleScrollToNextSection}
        onClickPrevious={handleScrollToPreviousSection}
      />
    </div>
  );
}

// Plovoucí tlačítko pro navigaci nahoru/dolů
function FloatingButton({
  currentSectionIndex,
  onClickNext,
  onClickPrevious,
}: {
  currentSectionIndex: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}) {
  const isLastSection = currentSectionIndex === sections.length - 1;
  const isFirst = currentSectionIndex === 0;

  return (
    <div>
      {/* Tlačítko pro navigaci na předchozí sekci nebo úplně nahoru */}
      <motion.button
        className="fixed bottom-3 right-10 p-5 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={isLastSection ? onClickPrevious : onClickNext}
      >
        {isLastSection ? <FaArrowUp /> : <FaArrowDown />}{" "}
        {/* Změníme ikonu podle stavu */}
      </motion.button>
    </div>
  );
}
