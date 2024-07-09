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
  const isFirstSection = currentSectionIndex === 0;
  const isLastSection = currentSectionIndex === totalSections - 1;

  return (
    <div>
      {/* Display up arrow button only if not on the first section */}
      {!isFirstSection && (
        <motion.button
          className="fixed bottom-20 right-10 p-5 opacity-75 bg-white border-black text-white rounded-full shadow-lg"
          onClick={onClickPrevious}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp color="black" />
        </motion.button>
      )}

      {/* Display down arrow button only if not on the last section */}
      {!isLastSection && (
        <motion.button
          className="fixed bottom-10 right-10 p-5 bg-white  border-white border text-white rounded-full shadow-lg"
          onClick={onClickNext}
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
