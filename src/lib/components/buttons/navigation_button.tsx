import { motion } from "framer-motion";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface NavigationButtonProps {
  currentSectionIndex: number;
  totalSections: number;
  onClickNext: () => void;
  onClickPrevious: () => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  currentSectionIndex,
  totalSections,
  onClickNext,
  onClickPrevious,
}) => {
  const isLastSection = currentSectionIndex === totalSections - 1;

  return (
    <div>
      {/* Zobrazí tlačítko pro navigaci nahoru, pouze pokud není na první sekci */}
      {currentSectionIndex > 0 && (
        <motion.button
          className="fixed bottom-20 right-10 p-5 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={onClickPrevious}
        >
          {currentSectionIndex !== 0 && <FaArrowUp />}{" "}
          {/* Změna ikony podle podmínek */}
        </motion.button>
      )}

      {/* Zobrazí tlačítko pro navigaci dolů, pokud není na poslední sekci */}
      {!isLastSection && (
        <motion.button
          className="fixed bottom-10 right-10 p-5 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={onClickNext}
        >
          <FaArrowDown /> {/* Ikona pro skrolování dolů */}
        </motion.button>
      )}
    </div>
  );
};

export default NavigationButton;
