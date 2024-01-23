import React from "react";
import Image from "next/image";

interface ImageIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

const ImageIcon: React.FC<ImageIconProps> = ({
  src,
  alt,
  className,
  ...rest
}) => (
  <div>
    <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/icons/github.svg"
      width={38}
      height={38}
      priority
      alt={""}
    />
  </div>
);

export default ImageIcon;
