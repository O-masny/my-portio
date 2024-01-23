import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "../app/globals.css";
const fonts = Bitter({
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en" className={fonts.className}>
      <body>{children}</body>
    </html>
  );
}
