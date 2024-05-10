"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa"; // Ikony pro tlačítko přepínače
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export interface ILink {
  title: string;
  href: string;
}

export interface LinkArray {
  links: ILink[];
}

export default function Navbar({ links }: LinkArray) {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false); // Stavová proměnná pro otevření/zavření navbaru
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev); // Přepínač pro stav navbaru
  };

  return (
    <div>
      {/* Tlačítko pro přepínání navbaru */}
      <button
        onClick={toggleNavbar}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        {isOpen ? <FaTimes /> : <FaBars />} {/* Ikona pro otevření/zavření */}
      </button>

      <motion.div
        variants={menuSlide} // Framer Motion animace
        initial="initial"
        animate={isOpen ? "enter" : "exit"} // Otevření/zavření podle stavu
        className="absolute top-0 right-0 h-full w-64 bg-gray-900 text-white p-4"
      >
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
        >
          <h2 className="text-xl font-bold">Navigation</h2> {/* Název menu */}
          {links.map((data, index) => (
            <motion.a
              key={index}
              title={data.title}
              href={data.href}
              onClick={(e) => {
                e.preventDefault();
                router.push(data.href); // Navigace při kliknutí
              }}
              className="block p-2 rounded hover:bg-gray-700"
            >
              {data.title} {/* Název odkazu */}
            </motion.a>
          ))}
        </div>

        <div className="mt-auto">
          <a className="block p-2 rounded hover:bg-gray-700">Instagram</a>{" "}
          {/* Sociální sítě */}
          <a className="block p-2 rounded hover:bg-gray-700">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}

export const menuSlide = {
  initial: { x: "100%" }, // Navbar je mimo obrazovku
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }, // Přechod dovnitř
  exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }, // Přechod ven
};
