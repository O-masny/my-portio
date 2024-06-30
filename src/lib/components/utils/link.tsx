import styles from "../../../styles/navbar.module.css";
import Link from "next/link";

import { motion } from "framer-motion";
import { ILink } from "../nav/navbar_body";

export default function Linker(
  props: ILink,
  isActive: boolean,
  index: number,
  setSelectedIndicator: any
) {
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(props.href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>

      <Link href={props}>{props.title}</Link>
    </motion.div>
  );
}

export const slide = {
  initial: { x: 80 },

  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },

  closed: { scale: 0, transition: { duration: 0.4 } },
};
