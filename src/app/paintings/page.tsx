import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import dynamic from "next/dynamic";
import Footer from "@/lib/components/footer";

const PaintingsScreenClient = dynamic(
  () => import("@/lib/screens/_paintings_page")
);

const PaintingsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="fixed z-10 flex-row flex top-4 left-2 px-4 cursor-pointer">
        <Link scroll={false} href="/" shallow={true}>
          <FiArrowLeft className="text-white w-6 h-6" />{" "}
        </Link>
        <p className="ml-4">Homepage</p>
      </div>
      <h1 className="text-3xl font-bold pt-16">Paintings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <PaintingsScreenClient />
      </div>
      <Footer />
    </div>
  );
};

export default PaintingsPage;
