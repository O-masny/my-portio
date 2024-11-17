"use client";
import WelcomePage from "@/lib/components/pages/welcome_page";
import { useEffect, useState } from "react";
const SplashScreenProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <WelcomePage /> : children;
};

export default SplashScreenProvider;
