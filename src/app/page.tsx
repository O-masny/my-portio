"use client";

import { useRef, useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Navbar from "@/lib/components/navabr/navbar";
import Footer from "@/lib/components/footer";

import { AnimatePresence } from "framer-motion";
import { MyThemeContextProvider } from "@/lib/components/theme_provider";
import StickCursor from "@/lib/components/utils/cursor";
import Homepage from "@/lib/pages/homepage";
import WelcomePage from "@/lib/pages/welcome";

export default function ClientComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []); // Prázdný seznam závislostí, protože se provádí pouze jednou

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      if (typeof window !== "undefined") {
        window.scrollTo(0, 0); // Pouze pokud existuje `window`
      }
    }, 2000);
  }, []); // Tento efekt běží pouze na klientské straně

  return (
    <div ref={containerRef}>
      <AnimatePresence mode="wait">
        {isLoading && <WelcomePage />} {/* Zobrazení stránky při načítání */}
      </AnimatePresence>
      {!isLoading && (
        <MyThemeContextProvider>
          <Navbar />
          <StickCursor />
          <Homepage />
          <Footer />
        </MyThemeContextProvider>
      )}
    </div>
  );
}
