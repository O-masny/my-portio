"use client";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "../components/cards/card_loader";
import PaintingCard from "../components/cards/painting_card";
export interface Painting {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}
interface Props {
  paintings: Painting[];
}

const PaintingsClient: React.FC<Props> = ({ paintings }) => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: paintings.length ?? 6 }).map((_, index) => (
          <SkeletonLoader key={index} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {paintings.map((painting) => (
        <PaintingCard key={painting.id} painting={painting} />
      ))}
    </div>
  );
};

export default PaintingsClient;
