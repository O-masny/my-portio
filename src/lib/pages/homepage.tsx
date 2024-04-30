import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainPage from "./landing_page";
import ExperiencePage from "./experience_page";
import Slider from "../components/slider";
import EducationAndHobbies from "./hobbies";
import PortfolioCardGrid from "./portfolio_page";
import ContactPage from "./contact_page";
import { FaArrowDown } from "react-icons/fa";

// Definice animací pro přechody
const variants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Funkce pro scrollování na další sekci
  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Jednorázová inicializace
  useEffect(() => {
    setTimeout(() => {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 4000);
  }, []); // Prázdný seznam závislostí, aby se zabránilo přerenderování

  const [experienceRef, inViewExperience] = useInView({
    triggerOnce: true, // Aktivuje se pouze jednou
    threshold: 0.5, // Vyšší prahová hodnota, aby se zabránilo častému přepínání
  });

  return (
    <main>
      <motion.button
        onClick={handleScrollToNextSection}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        {" "}
        <FaArrowDown />
      </motion.button>
      <MainPage></MainPage> <ExperiencePage />
      {/* Další sekce */}
      <Slider />
      <EducationAndHobbies />
      <PortfolioCardGrid />
      {/* Zbytek stránky */}
      <ContactPage />
    </main>
  );
}
