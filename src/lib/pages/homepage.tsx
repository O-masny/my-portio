import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MainPage from "./landing_page";
import EducationAndHobbies from "./hobbies";
import ExperiencePage from "./experience_page";
import PortfolioCardGrid from "./portfolio_page";
import ContactPage from "./contact_page";
import Slider from "../components/slider";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  // Nastavení useInView pro každou sekci
  const [mainRef, inViewMain] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [educationRef, inViewEducation] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [experienceRef, inViewExperience] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [portfolioRef, inViewPortfolio] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <main>
      <motion.div
        ref={mainRef}
        initial="hidden"
        animate={inViewMain ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <MainPage />
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
        ref={experienceRef}
        initial="hidden"
        animate={inViewExperience ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ExperiencePage />
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

      <Slider />
      <ContactPage />
    </main>
  );
}
