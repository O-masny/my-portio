"use client";
import { AnimatePresence } from "framer-motion";
import styles from "../../../styles/navbar.module.css";
import { useState } from "react";
import { ILink } from "@/lib/utils/interfaces";
import Navbar from "./navbar_body";

export default function NavbarComponent() {
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
    href: "#home",
  },

  {
    title: "Projects",

    href: "#portfolio",
  },

  {
    title: "About",

    href: "#experience",
  },

  {
    title: "Contact",

    href: "#contact",
  },
];
