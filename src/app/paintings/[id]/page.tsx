import React from "react";
import Image from "next/image";

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Painting } from "@/lib/pages/_paintings_page";

export default function Page({ params }: { params: Painting }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href={"/paintings"}>
        {" "}
        <div className="absolute top-2 left-2">
          <FiArrowLeft className="text-gray-500 w-6 h-6" />
        </div>
      </Link>
      <Image
        src={params.imageUrl}
        alt="image"
        layout="fill"
        objectFit="contain" // Udržuje konzistenci velikosti a zobrazení
      />
    </div>
  );
}
