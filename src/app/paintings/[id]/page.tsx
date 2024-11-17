"use client"

import React, { useEffect } from "react";
import { paintingsData } from "@/lib/data/data";
import { Painting } from "@/lib/utils/interfaces";
import Intro from "@/lib/components/pages/detail_paintings/intro";
import Description from "@/lib/components/pages/detail_paintings/description";
import Pictures from "@/lib/components/pages/detail_paintings/pictures";

export default function Page({ params }: { params: Painting }) {
  const painting = paintingsData.find((p) => p.id === params.id);

  if (!painting) {
    return <div>Painting not found</div>;
  }
  useEffect(() => {

    (

      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll();

      }

    )()

  }, [])
  return (
    <div>
      <Intro params={painting} />
      <Description />
      <Pictures />
    </div>
  );
}
