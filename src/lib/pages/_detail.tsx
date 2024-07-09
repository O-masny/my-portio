"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Painting } from "@/lib/pages/_paintings_page";
import { paintingsData } from "@/lib/data/data";

export default function PaintingDetailScreen({ params }: { params: Painting }) {
  const painting = paintingsData.find((p) => p.id === params.id);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="fixed z-10 flex items-center justify-between shadow-gray-400 shadow-sm py-4 left-0 right-0 bg-black px-4 cursor-pointer">
        <Link href="/paintings" shallow={true}>
          <div className="flex items-center">
            <FiArrowLeft className="text-white w-6 h-6" />
            <p className="ml-4 text-white">Paintings</p>
          </div>
        </Link>
        <p className="text-white">{params.title}</p>
      </div>

      <div className="relative">
        <div
          className={`fixed top-0 left-0 w-full p-4 z-20 transition-opacity duration-300 ${
            scrollY > 50 ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
          }}
        >
          <div className="flex justify-between items-center text-white">
            <h1 className="text-2xl font-bold">{params.title}</h1>
            <p className="text-lg">{params.title}</p>
          </div>
        </div>

        <div className="flex flex-col mx-auto px-4 py-8 relative text-white">
          <div className="items-center h-96 mb-8">
            <Image
              src={params.imageUrl}
              alt="Painting image"
              layout="responsive"
              width={618} // Provide a width for responsive layout
              height={678} // Provide a height for responsive layout
              className="shadow-2xl rounded-lg p-4 shadow-red-800 align-middle"
            />
            <div className="text-start py-4 space-y-4 my-auto">
              <h1 className="text-3xl font-bold mb-4">{params.title}</h1>
              <p className="text-lg mb-2">Date Created: 2023-06-30</p>
              <p className="text-lg mb-8">{params.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
