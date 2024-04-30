import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainPage from "./landing_page";
import EducationAndHobbies from "./hobbies";
import ExperiencePage from "./experience_page";
import PortfolioCardGrid from "./portfolio_page";
import ContactPage from "./contact_page";
import Slider from "../components/slider";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  // Funkce pro scrollování na další sekci (bez použití `useEffect` uvnitř)
  const handleScrollToNextSection = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Základní inicializace při montování komponenty
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 4000);
    })();
  }, []);

  // Animace a viditelnost komponent
  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Zvýšení `threshold` u `useInView` pro omezení přepínání mezi stavy
  const [mainRef, inViewMain] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [educationRef, inViewEducation] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [experienceRef, inViewExperience] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [portfolioRef, inViewPortfolio] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [sliderRef, inViewSlider] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <main>
      {/* Tlačítko se šipkou dolů pro scrollování na další sekci */}
      <motion.button
        onClick={handleScrollToNextSection}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
      >
        <FaArrowDown />
      </motion.button>

      {/* Sekce s přechodovou animací */}
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={inViewMain ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <MainPage />
      </motion.div>

      {/* Další sekce */}
      <motion.div
        ref={experienceRef}
        initial="hidden"
        animate={inViewExperience ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ExperiencePage />
      </motion.div>
      <motion.div
        ref={sliderRef}
        initial="hidden"
        animate={inViewSlider ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Slider />
      </motion.div>

      <motion.div
        ref={educationRef}
        initial="hidden"
        animate={inViewEducation ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <EducationAndHobbies />
      </motion.div>

      <motion.div
        ref={portfolioRef}
        initial="hidden"
        animate={inViewPortfolio ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <PortfolioCardGrid />
      </motion.div>

      {/* Zbytek stránky */}
      <ContactPage />
    </main>
  );
}
