import React from "react";
import Image from "next/image";
import { Painting } from "@/lib/screens/_paintings_page";

const PaintingCard: React.FC<Painting> = (props: Painting) => {
  return (
    <div key={props.id} className="card">
      <Image
        src={props.imageUrl}
        alt={props.title}
        width={1000}
        height={1800}
      />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default PaintingCard;
