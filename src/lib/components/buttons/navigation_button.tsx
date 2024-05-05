import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface NavigationButtonProps {
  currentSectionIndex: number;
  totalSections: number; // Přidali jsme celkový počet sekcí
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  currentSectionIndex,
  totalSections, // Předáme celkový počet sekcí
  onClickNext,
  onClickPrevious,
}) => {
  const isLastSection = currentSectionIndex === totalSections - 1; // Ověříme, zda je poslední sekce

  return (
    <div>
      <motion.button
        className="fixed bottom-20 right-10 p-5 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={onClickPrevious}
      >
        {<FaArrowUp />} {/* Změna ikony podle podmínek */}
      </motion.button>

      {!isLastSection && (
        <motion.button
          className="fixed bottom-10 right-10 p-5 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={onClickNext}
        >
          <FaArrowDown />
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButton;
