import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "../app/globals.css";
const robotoMono = Roboto_Mono({
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
    <html lang="en" className={robotoMono.className}>
      <body>{children}</body>
    </html>
  );
}
