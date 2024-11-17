"use client";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "../cards/card_loader";
import PaintingCard from "../cards/painting_card";
import { Painting } from "@/lib/utils/interfaces";

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
