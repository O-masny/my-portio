import fs from "fs";
import path from "path";

interface ImageData {
  src: string;
  title: string;
  description: string;
  index: number;
}

export const getImages = (): ImageData[] => {
  const imagesDir = path.resolve("./public/images");
  const files = fs.readdirSync(imagesDir);

  return files.map((file, index) => ({
    src: `/images/${file}`,
    title: `Title ${index + 1}`, // Přizpůsobte podle potřeby
    description: `Description for image ${index + 1}`, // Přizpůsobte podle potřeby
    index,
  }));
};
