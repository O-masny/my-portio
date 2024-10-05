"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
  { src: "/images/pic1.jpg", alt: "Photo 1" },
  { src: "/images/pic2.jpeg", alt: "Photo 2" },
  { src: "/images/pic3.jpeg", alt: "Photo 3" },
  { src: "/images/pic4.jpeg", alt: "Photo 4" },
  { src: "/images/pic5.jpeg", alt: "Photo 5" },
  { src: "/images/pic6.jpeg", alt: "Photo 6" },
];

const SliderPaintings = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className="keen-slider__slide relative h-screen w-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default SliderPaintings;
