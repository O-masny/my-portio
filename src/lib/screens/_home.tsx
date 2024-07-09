// components/ClientSideHomepage.tsx

"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import NavigationButton from "../components/buttons/navigation_button";

const LocomotiveScroll = () => import("locomotive-scroll");
const EducationAndHobbies = dynamic(() => import("./hobbies"), {
  ssr: false,
});
const ResponsiveWordcloud = dynamic(() => import("../../app/experience/page"), {
  ssr: false,
});
const LandingScreen = dynamic(() => import("./landing_page"), {
  ssr: false,
});

const ContactPage = dynamic(() => import("../../app/contact/page"), {
  ssr: false,
});

const sections = [
  { name: "home", id: "home", Component: LandingScreen },
  { name: "experience", id: "experience", Component: ResponsiveWordcloud },
  { name: "hobbies", id: "hobbies", Component: EducationAndHobbies },
  { name: "contact", id: "contact", Component: ContactPage },
];

const ClientSideHomepage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    let scroll: any = null;

    if (containerRef.current) {
      LocomotiveScroll().then((module) => {
        if (containerRef.current) {
          scroll = new module.default({
            el: containerRef.current as HTMLElement,
            smooth: true,
          });
        }
      });
    }

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, [containerRef]);

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
        containerRef.current.scrollTop = 0;
        setCurrentSectionIndex(0);
      }
    }
  };

  return (
    <div className="space-y-12" ref={containerRef}>
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
};

export default ClientSideHomepage;
