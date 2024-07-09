"use client";
import React, { useState, useEffect } from "react";
import PaintingCard from "../components/cards/painting_card";

export interface Painting {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

const PaintingsScreenClient: React.FC = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaintings = async () => {
      try {
        const response = await fetch("/api/paintings");
        const data = await response.json();
        setPaintings(data);
      } catch (error) {
        console.error("Failed to fetch paintings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPaintings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {paintings.map((painting) => (
        <PaintingCard
          key={painting.id}
          id={painting.id}
          title={painting.title}
          description={painting.description}
          imageUrl={painting.imageUrl}
        />
      ))}
    </div>
  );
};

export default PaintingsScreenClient;
