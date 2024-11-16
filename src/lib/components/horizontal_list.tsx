import React from "react";
import { motion } from "framer-motion";

interface HorizontalSliderProps {
    children: React.ReactNode; // Přijímá libovolný počet potomků
}

const HorizontalSlider: React.FC<HorizontalSliderProps> = ({ children }) => {
    return (
        <div className="overflow-x-auto z-1000 overflow-y-hidden w-full h-full scrollbar-hide">
            <motion.div
                className="flex space-x-4"
                drag="x" // Umožňuje horizontální drag
                dragConstraints={{ left: -1000, right: 0 }} // Omezení pro drag
                initial={{ x: 0 }} // Výchozí pozice
                whileTap={{ cursor: "grabbing" }} // Vizuální zpětná vazba
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-80 h-60 bg-gray-700 text-white flex items-center justify-center rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }} // Zvýraznění při najetí
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default HorizontalSlider;
