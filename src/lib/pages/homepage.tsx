"use-client";
import Image from "next/image";
import SplitCenter from "./split_page";
import PortfolioCardGrid from "./portfolio_page";
import ContactPage from "./contact_page";
import { useEffect, useState } from "react";
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
      }, 2000);
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-1/2 ">
        {" "}
        <div className="top-0 pb-50px"> </div>
        <h1 className="mt-10   text-5xl font-bitter ">
          My name is Ondřej Masný
        </h1>
      </div>
      <div className="mt-5">
        <PortfolioCardGrid />
      </div>{" "}
      <Slider />
      <ContactPage />
    </main>
  );
}
