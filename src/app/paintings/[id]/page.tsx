import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Painting } from "@/lib/pages/_paintings_page";
import { paintingsData } from "@/lib/data/data";

export default function Page({ params }: { params: Painting }) {
  const painting = paintingsData.find((p) => p.id === params.id);

  if (!painting) {
    return <div>Painting not found</div>;
  }
  return (
    <div className="container mx-auto px-4 py-8 relative  text-white">
      <Link href="/paintings" shallow={true}>
        <div className="fixed flex-row flex top-4 left-2 px-4 cursor-pointer">
          <FiArrowLeft className="text-white w-6 h-6" />{" "}
          <p className="ml-4">Paintings</p>
        </div>
      </Link>
      <div className="relative w-full h-96 mb-8">
        <Image
          src={painting.imageUrl}
          alt="Painting image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{painting.title}</h1>
        <p className="text-lg mb-2">Date Created: 2023-06-30</p>{" "}
        {/* Replace with actual date if available */}
        <p className="text-lg mb-8">{painting.description}</p>
      </div>
    </div>
  );
}
