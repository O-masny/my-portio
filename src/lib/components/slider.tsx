import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "../../styles/image_slide.module.css";
import Image from "next/image";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "pic1.jpg",
  },
  {
    color: "#d6d7dc",
    src: "pic1.jpg",
  },
  {
    color: "#e3e3e3",
    src: "pic1.jpg",
  },
  {
    color: "#21242b",
    src: "pic1.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "pic1.jpg",
  },
  {
    color: "#e5e0e1",
    src: "pic1.jpg",
  },
  {
    color: "#d7d4cf",
    src: "pic1.jpg",
  },
  {
    color: "#e1dad6",
    src: "pic1.jpg",
  },
];

export default function Slider() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const style = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={`${project.src}+${index}`}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={`${project.src}+${index}`}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: style }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
