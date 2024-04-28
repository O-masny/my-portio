"use-client";

import PortfolioCardGrid from "./portfolio_page";
import ContactPage from "./contact_page";
import { useEffect, useState } from "react";
import Slider from "../components/slider";
import ExperiencePage from "./experience_page";
import MainPage from "./landing_page";
import EducationAndHobbies from "./hobbies";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const revealVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;

      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);

        document.body.style.cursor = "default";

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className="">
      <MainPage />
      <EducationAndHobbies />
      <ExperiencePage />
      {/* Zbytek obsahu stránky */}
      <div className="mt-5">
        <PortfolioCardGrid />
      </div>

      <Slider />
      <ContactPage />
    </main>
  );
}
