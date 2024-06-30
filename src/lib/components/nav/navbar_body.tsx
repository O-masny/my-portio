"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

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

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string) => {
    router.push(href);
    setIsOpen(false); // Zavřít navbar po kliknutí na odkaz
  };

  useEffect(() => {
    setSelectedIndicator(pathname);
  }, [pathname]);

  return (
    <div>
      <button
        onClick={toggleNavbar}
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded-full"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <motion.div
        variants={menuSlide}
        initial="initial"
        animate={isOpen ? "enter" : "exit"}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white p-4"
      >
        <div>
          <h2 className="text-xl font-bold">Navigation</h2>
          {links.map((data, index) => (
            <motion.a
              key={index}
              title={data.title}
              href={data.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(data.href);
              }}
              className="block p-2 rounded hover:bg-gray-700"
            >
              {data.title}
            </motion.a>
          ))}
        </div>

        <div className="mt-auto">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 rounded hover:bg-gray-700"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-2 rounded hover:bg-gray-700"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export const menuSlide = {
  initial: { x: "100%" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
};
