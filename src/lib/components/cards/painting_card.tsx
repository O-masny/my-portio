// components/PaintingCard.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi"; // Import ikony šipky zpět
import { Painting } from "@/lib/pages/_paintings_page";
import { paintingsData } from "@/lib/data/data";

interface PaintingCardProps {
  painting: Painting;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ painting }) => {
  return (
    <div className="relative">
      <Link href={`/paintings/${painting.id}`}>
        <div className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200">
          <div className="relative w-full h-40 mb-2">
            <Image
              src={painting.imageUrl}
              alt={painting.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              loading="lazy"
              fill
            />
          </div>
          <h3 className="text-lg font-semibold">{painting.title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default PaintingCard;
