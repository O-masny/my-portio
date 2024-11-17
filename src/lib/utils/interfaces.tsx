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
export interface PaintingCardProps {
    painting: Painting;
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
export interface Painting {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}
export interface ILink {
    title: string;
    href: string;
}

export interface LinkArray {
    links: ILink[];
}
