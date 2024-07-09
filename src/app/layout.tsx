import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "../app/globals.css";
import WelcomePage from "@/lib/screens/welcome_page";
import ScrollAnimation from "@/lib/components/utils/square_scroll";
import Transition from "@/lib/components/utils/transition";
import React from "react";
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
      <body className={fonts.className}>
        <WelcomePage /> <Transition>{children}</Transition>
        <ScrollAnimation />
      </body>
    </html>
  );
}
