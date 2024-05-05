"use client";
import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar";
import { MyThemeContextProvider } from "@/lib/components/theme_provider";
import StickCursor from "@/lib/components/utils/cursor";
import Homepage from "@/lib/pages/homepage";
import WelcomePage from "@/lib/pages/welcome";
import { AnimatePresence } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null); // Reference na hlavní kontejner

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

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);

        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <WelcomePage />}
      </AnimatePresence>
      <Body isLoading={isLoading} />)
    </div>
  );
}
interface Load {
  isLoading: boolean;
}

const Body = (props: Load) => {
  return (
    <MyThemeContextProvider>
      <Navbar />
      <StickCursor />
      <Homepage />
      <Footer />
    </MyThemeContextProvider>
  );
};
