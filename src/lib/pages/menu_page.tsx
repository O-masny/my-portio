"use client"; // Tato komponenta běží pouze na klientské straně
import { useEffect, useState, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { AnimatePresence } from "framer-motion";
import { MyThemeContextProvider } from "../components/theme_provider";
import StickCursor from "../components/utils/cursor";
import Homepage from "./homepage";
import WelcomePage from "./welcome";

export function ClientComponent() {
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
  }, []); // Provádí se pouze na klientské straně

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      if (typeof window !== "undefined") {
        window.scrollTo(0, 0); // Přístup k `window` pouze na klientské straně
      }
    }, 2000);
  }, []); // Provádí se pouze na klientské straně

  return (
    <div ref={containerRef}>
      <AnimatePresence mode="wait">
        {isLoading && <WelcomePage />} {/* Zobrazení při načítání */}
      </AnimatePresence>

      {!isLoading && (
        <MyThemeContextProvider>
          <Homepage />
        </MyThemeContextProvider>
      )}
    </div>
  );
}
