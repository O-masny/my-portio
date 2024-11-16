import type { Metadata } from "next";
import { Bitter, Bebas_Neue } from "next/font/google";
import "../app/globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "OMA",
  description: "Portofolio - Ondrej Masny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebas.className}>
      <body className={bitter.className}>
        {children}
      </body>
    </html>
  );
}
