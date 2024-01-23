"use client";
import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navbar";
import { MyThemeContextProvider } from "@/lib/components/theme_provider";
import Homepage from "@/lib/pages/homepage";
import WelcomePage from "@/lib/pages/welcome";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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
      }, 2000);
    })();
  }, []);
  return (
    <div>
      <AnimatePresence mode="wait">
        {isLoading && <WelcomePage />}
      </AnimatePresence>
      <div>
        <MyThemeContextProvider>
          <Navbar />
          <Homepage />
          <Footer />
        </MyThemeContextProvider>
      </div>
    </div>
  );
}
