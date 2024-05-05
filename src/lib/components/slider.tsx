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
    src: "pic2.jpeg",
  },
  {
    color: "#e3e3e3",
    src: "pic3.jpeg",
  },
  {
    color: "#21242b",
    src: "pic4.jpeg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "pic4.jpeg",
  },
  {
    color: "#e5e0e1",
    src: "pic6.jpeg",
  },
  {
    color: "#d7d4cf",
    src: "pic5.jpeg",
  },
  {
    color: "#e1dad6",
    src: "pic2.jpeg",
  },
];

export default function Slider() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const circleScale = useTransform(scrollYProgress, [0, 1.5], [1, 2]); // Zmenšuje se při skrolování

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const style = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const styley = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="">
      {" "}
      <div id="Carousel" ref={container} className={styles.slidingImages}>
        {" "}
        <motion.div
          style={{
            opacity: scrollYProgress,
            scale: circleScale, // Používá transformaci z `useTransform`
          }}
          className="absolute -z-10 aspect-square w-full  h-full border-r-8 rounded-full " // Umístění na pozadí
        >
          <div className="bg-blue-950 w-full h-full rounded-lg"></div>{" "}
          {/* Základní kruh */}
        </motion.div>
        <motion.div style={{ x: x1 }} className={styles.slider}>
          {slider1.map((project, index) => {
            return (
              <div key={`${project.src}+${index}`} className={styles.project}>
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
              <div key={`${project.src}+${index}`} className={styles.project}>
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
      </div>
    </div>
  );
}
