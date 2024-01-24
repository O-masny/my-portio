"use client";
import { AnimatePresence } from "framer-motion";
import styles from "../../../styles/navbar.module.css";
import { useState } from "react";
import Navbar, { ILink, LinkArray } from "./navbar_body";

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className={styles.button}
      >
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>

      <AnimatePresence mode="wait">
        {isActive && <Navbar links={navItems} />}
      </AnimatePresence>
    </>
  );
}
const navItems: ILink[] = [
  {
    title: "Home",
    href: "#",
  },

  {
    title: "Projects",

    href: "/Projects",
  },

  {
    title: "About",

    href: "#Carousel",
  },

  {
    title: "Contact",

    href: "#Contact",
  },
];
