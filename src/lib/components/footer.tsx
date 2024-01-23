import { useTheme } from "next-themes";
import ImageIcon from "./icons/image_icon";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="h-center">
      <footer className="bg-gray-800 p-4 flex left-0">
        <div className="container mx-auto text-center">
          <p className="text-white">©2024 Ondřej Masný</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
