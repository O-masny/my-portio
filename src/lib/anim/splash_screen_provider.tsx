"use client";
import { useEffect, useState } from "react";
import WelcomePage from "../screens/welcome_page";
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
