import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { Painting } from "@/lib/pages/_paintings_page";
import { paintingsData } from "@/lib/data/data";

export default function Page({ params }: { params: Painting }) {
  const router = useRouter();
  const painting = paintingsData.find((p) => p.id === params.id);

  if (!painting) {
    return <div>Painting not found</div>;
  }

  return (
    <div
      className="container mx-auto px-4 py-8 relative bg-gradient-to-b from-gray-800 to-gray-900 text-white"
      onClick={() => router.push("/paintings")}
    >
      <Link href="/paintings">
        <a className="fixed top-2 left-2 bg-gray-700 p-2 rounded-full">
          <FiArrowLeft className="text-gray-300 w-6 h-6" />
        </a>
      </Link>
      <div
        className="relative w-full h-96 mb-8"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={painting.imageUrl}
          alt="Painting image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-center" onClick={(e) => e.stopPropagation()}>
        <h1 className="text-4xl font-bold mb-4">{painting.title}</h1>
        <p className="text-lg mb-2">Date Created: 2023-06-30</p>{" "}
        {/* Replace with actual date if available */}
        <p className="text-lg mb-8">{painting.description}</p>
      </div>
    </div>
  );
}
