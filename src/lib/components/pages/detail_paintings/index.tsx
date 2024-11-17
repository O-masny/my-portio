'use client'
import React, { useEffect, useRef } from "react";
import { paintingsData } from "@/lib/data/data";
import { Painting } from "@/lib/utils/interfaces";
import Intro from "@/lib/components/pages/detail_paintings/intro";
import Description from "@/lib/components/pages/detail_paintings/description";
import Pictures from "@/lib/components/pages/detail_paintings/pictures";
import Footer from "@/lib/components/footer";

export default function DetailPage({ params }: { params: Painting }) {
    const painting = paintingsData.find((p) => p.id === params.id);

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {

        (

            async () => {

                const LocomotiveScroll = (await import('locomotive-scroll')).default

                const locomotiveScroll = new LocomotiveScroll();

            }

        )()

    }, [])

    if (!painting) {
        return <div>Painting not found</div>;
    }

    return (
        <div ref={scrollContainerRef}> {/* Wrapper pro LocomotiveScroll */}
            <Intro params={painting} />
            <Description />
            <Pictures />
            <Footer />
        </div>
    );
}
