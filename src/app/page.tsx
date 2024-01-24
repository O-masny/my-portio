"use client";
import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar";
import Slider from "@/lib/components/slider";
import { MyThemeContextProvider } from "@/lib/components/theme_provider";
import StickCursor from "@/lib/components/utils/cursor";
import Homepage from "@/lib/pages/homepage";
import WelcomePage from "@/lib/pages/welcome";
import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const stickyElement = useRef(null);

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
      <Body isLoading={isLoading} />)
    </div>
  );
}
interface Load {
  isLoading: boolean;
}

const Body = (props: Load) => {
  return (
    <div>
      <MyThemeContextProvider>
        <Navbar />
        <StickCursor />
        <Homepage />
        <Footer />
      </MyThemeContextProvider>
    </div>
  );
};
