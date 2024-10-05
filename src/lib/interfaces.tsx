import { ReactNode } from "react";

export interface AnimatedSectionProps {
    children: ReactNode; // Obsah, který bude animován
    className: string; // Možnost přidat vlastní CSS třídu
    animationDuration?: number; // Délka animace
    triggerPoint?: string; // Výchozí bod pro spuštění animace
    customAnimation?: (element: HTMLElement) => void; // Možnost zadat vlastní animaci
}