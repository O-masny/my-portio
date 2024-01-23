"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useState } from "react";
import NavigationButton from "./buttons/navigation_button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 40);
    };

    window.addEventListener("scroll", handleScroll);

    // Uvolnění posluchače události při odstranění komponenty
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container sticky align-top mx-auto px-4  bg-white dark:bg-gray-900 h-0">
      <div className="flex justify-between items-center h-full">
        {" "}
        <NavigationButton title={"Projects"} description={""} />
        <NavigationButton title={"Contact"} description={""} />
        <NavigationButton title={"Skills"} description={""} />
        <NavigationButton title={"Experiences"} description={""} /> <Button />
      </div>
    </div>
  );
};

export default Navbar;
