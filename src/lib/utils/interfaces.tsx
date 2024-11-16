"use client"
import { ReactNode } from "react";

export interface AnimatedSectionProps {
    children: ReactNode;
    className: string;
    animationDuration?: number;
    triggerPoint?: string;
    customAnimation?: (element: HTMLElement) => void;
}

export interface HorizontalScrollProps {
    children: ReactNode;
}
export interface WordData {
    text: string;
    value: number;
}
export interface CardProjectProps {
    image: string; // URL obrázku
    title: string; // Název projektu
    description: string; // Popis projektu
    date?: string; // Datum projektu (volitelné)
    techstack: string; // Technologie použité v projektu
    previewLink?: string; // Odkaz na náhled projektu (volitelné)
    githubLink?: string; // Odkaz na GitHub projektu (volitelné)
}