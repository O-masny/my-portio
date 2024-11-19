"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi"; // Import ikony šipky zpět
import { paintingsData } from "@/lib/data/data";
import PaintingCard from "@/lib/components/cards/painting_card";
import Footer from "@/lib/components/footer";

const PaintingsPage = () => {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])
  return (
    <div className="container mx-auto px-4">
      <Link href="/" shallow={true} scroll={true} >
        <div className="fixed z-10 flex items-center top-0 left-0 right-0 bg-black px-4 py-4 cursor-pointer">
          <FiArrowLeft className="text-white w-6 h-6" />{" "}
          <p className="ml-4">Homepage</p>
        </div>
      </Link>
      <h1 className="text-3xl font-bold pt-16">Paintings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6  py-8">
        {paintingsData.map((painting) => (
          <div key={painting.id}>
            <Link href={"/paintings/" + painting.id} shallow={true} scroll={false}>
              <PaintingCard painting={painting} />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PaintingsPage;
