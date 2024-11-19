'use client'
import React, { useEffect, useRef } from "react";
import { paintingsData } from "@/lib/data/data";
import { Painting } from "@/lib/utils/interfaces";
import Intro from "@/lib/components/pages/detail_paintings/intro";
import Description from "@/lib/components/pages/detail_paintings/description";
import Pictures from "@/lib/components/pages/detail_paintings/pictures";
import Footer from "@/lib/components/footer";
import { useRouter } from "next/navigation";
import BackButton from "../../icons/back_button";
import Template from "@/lib/utils/animations/pageTransition";

export default function DetailPage({ params }: { params: Painting }) {
    const painting = paintingsData.find((p) => p.id === params.id);
    const router = useRouter(); // Inicializace routeru
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
            <Template>
                <BackButton />
                <Intro params={painting} />
                <Description />
                <Pictures params={painting} />
                <Footer />
            </Template>
        </div>
    );
}
