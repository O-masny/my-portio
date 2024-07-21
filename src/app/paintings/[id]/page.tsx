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
    <div>
      <Link href="/paintings" shallow={true}>
        <div className="fixed z-10 flex items-center top-0 left-0 right-0 bg-black px-4 py-4 cursor-pointer">
          <FiArrowLeft className="text-white w-6 h-6" />
          <p className="ml-4 text-white">Paintings</p>
        </div>
      </Link>
      <h1 className="text-3xl text-center font-bold py-4">{painting.title}</h1>
      <div className="flex flex-col  md:flex-row lg:flex-row items-center px-4 py-8 text-white">
        <div className="w-full  lg:h-1/2 mb-8  relative">
          <Image
            src={painting.imageUrl}
            alt="Painting image"
            width={300}
            height={300}
            layout="responsive"
            className="shadow-2xl rounded-lg shadow-red-800"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8 text-center items-center ">
          <div className="text-start space-y-4 my-auto">
            <p className="text-lg mb-2">Date Created: {painting.title}</p>
            <p className="text-lg mb-8">{painting.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
