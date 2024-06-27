import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import MainPage from "./landing_page";
import ContactPage from "./contact_page";
import ResponsiveWordcloud from "./experience_page";
import EducationAndHobbies from "./hobbies";
import PortfolioCardGrid from "./portfolio_page";
import NavigationButton from "../components/buttons/navigation_button";

const sections = [
  { name: "main", id: "main", Component: MainPage },
  { name: "experience", id: "experience", Component: ResponsiveWordcloud },
  { name: "education", id: "education", Component: EducationAndHobbies },
  { name: "portfolio", id: "portfolio", Component: PortfolioCardGrid },
  { name: "contact", id: "contact", Component: ContactPage },
];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") {
      return;
    }

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []); // Spustí se pouze jednou

  const scrollToSection = (sectionIndex: number) => {
    if (containerRef.current && sections[sectionIndex]) {
      const sectionId = sections[sectionIndex].id;
      const sectionElement = document.getElementById(sectionId);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
        setCurrentSectionIndex(sectionIndex); // Aktualizace indexu
      }
    }
  };

  const handleScrollToNextSection = () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sections.length) {
      scrollToSection(nextIndex);
    }
  };

  const handleScrollToPreviousSection = () => {
    const previousIndex = currentSectionIndex - 1;
    if (previousIndex >= 0) {
      scrollToSection(previousIndex); // Skrolujeme na předchozí sekci
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setCurrentSectionIndex(0);
    }
  };

  return (
    <div ref={containerRef} data-scroll-container>
      {sections.map((section) => {
        const { Component } = section;
        return (
          <div key={section.name} id={section.id} data-scroll-section>
            <Component />
          </div>
        );
      })}
      <NavigationButton
        currentSectionIndex={currentSectionIndex}
        onClickNext={handleScrollToNextSection}
        onClickPrevious={handleScrollToPreviousSection}
        totalSections={sections.length}
      />
    </div>
  );
}
