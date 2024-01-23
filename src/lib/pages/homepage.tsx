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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
          {" "}
          <div className="top-0 pb-6 "></div>
        </div>
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
          src="/pic1.jpg"
          width={1200}
          height={200}
          priority
          alt={""}
        />
        <h1 className="mt-10 text-5xl font-robotoMono">
          My name is Ondřej Masný
        </h1>
        <div className="mt-5">
          <PortfolioCardGrid />
        </div>{" "}
        <Slider />
        <ContactPage />
        <SplitCenter leftBackground="#F2F3D9" rightBackground="#F2F3D9" />
      </div>
    </main>
  );
}
