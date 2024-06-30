import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi"; // Import ikony šipky zpět
import { paintingsData } from "@/lib/data/data";
import PaintingCard from "@/lib/components/cards/painting_card";

const PaintingsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" shallow={true}>
        <div className="fixed top-2 left-2 cursor-pointer">
          <FiArrowLeft className="text-gray-500 w-6 h-6" />
        </div>
      </Link>
      <h1 className="text-3xl font-bold mb-6">Paintings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paintingsData.map((painting) => (
          <div key={painting.id}>
            <Link href={"/paintings/" + painting.id}>
              <div className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <PaintingCard painting={painting} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingsPage;
