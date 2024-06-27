"use client";
import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import ContactPage from "./contact_page";

import PortfolioCardGrid from "./portfolio_page";
import NavigationButton from "../components/buttons/navigation_button";
import EducationAndHobbies from "./hobbies";

const sections = [
  { name: "hobbies", id: "hobbies", Component: EducationAndHobbies },
];

export default function HomepageScreen() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Definice stavu načítání

  useEffect(() => {
    const scroll = containerRef.current
      ? new LocomotiveScroll({
          el: containerRef.current,
          smooth: true,
        })
      : null;

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [containerRef]); // Trigger the effect when containerRef changes

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      if (containerRef.current) {
        containerRef.current.scrollTop = 0; // Set scrollTop to 0
      }
    }, 2000);
  }, []); // Provádí se pouze na klientské straně

  const scrollToSection = (sectionIndex: number) => {
    const section = sections[sectionIndex];
    const sectionElement = document.getElementById(section.id);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
      setCurrentSectionIndex(sectionIndex);
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
      scrollToSection(previousIndex);
    } else {
      if (containerRef.current) {
        containerRef.current.scrollTop = 0; // Set scrollTop to 0
        setCurrentSectionIndex(0);
      }
    }
  };

  return (
    <div ref={containerRef}>
      {sections.map((section) => {
        const { Component } = section;
        return (
          <div key={section.name} id={section.id}>
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
