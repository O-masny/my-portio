import React, { useState } from "react";
import styles from "../../../styles/navbar.module.css";
import { motion } from "framer-motion";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export interface ILink {
  title: string;
  href: string;
}
export interface LinkArray {
  links: ILink[];
}
export default function Navbar(props: LinkArray) {
  const pathname = usePathname();
  const router = useRouter();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>

          {props.links.map((data, index) => {
            return (
              <motion.a
                title={data.title}
                key={index}
                href={data.href}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(data.href);
                }}
                className="flex h-[48px] hover:bg-slate-600 grow items-center justify-center text-pretty gap-2 rounded-md p-3  hover:translate-x-3 md:flex-none md:justify-start md:p-2 md:px-3"
              >
                {data.title}
              </motion.a>
            );
          })}
        </div>

        <div className={styles.footer}>
          <a>Awwwards</a>

          <a>Instagram</a>

          <a>Dribble</a>

          <a>LinkedIn</a>
        </div>
      </div>
    </motion.div>
  );
}
export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },

  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
