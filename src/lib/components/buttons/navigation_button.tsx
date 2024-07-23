import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface NavigationButtonProps {
  sections: string[];
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  sections = [],
}) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current = sections.map(
      (id) => document.getElementById(id) as HTMLElement | null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLElement
            );
            setCurrentSectionIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToSection = (index: number) => {
    const section = sectionRefs.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentSectionIndex < sections.length - 1) {
      scrollToSection(currentSectionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      scrollToSection(currentSectionIndex - 1);
    }
  };

  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === sections.length - 1;

  return (
    <div>
      {!isFirstSection && (
        <motion.button
          className="fixed bottom-20 right-10 p-5 opacity-75 bg-white border-black text-white rounded-full shadow-lg"
          onClick={handlePrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp color="black" />
        </motion.button>
      )}

      {!isLastSection && (
        <motion.button
          className="fixed bottom-10 right-10 p-5 bg-white border-white border text-white rounded-full shadow-lg"
          onClick={handleNext}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowDown color="black" />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButton;
