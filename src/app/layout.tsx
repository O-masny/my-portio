import type { Metadata } from "next";
import { Bitter } from "next/font/google";
import "../app/globals.css";
import SplashScreenProvider from "@/lib/anim/splash_screen_provider";
import WelcomePage from "@/lib/pages/welcome_page";
import ScrollAnimation from "@/lib/components/utils/square_scroll";
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
        <WelcomePage /> {children}
        <ScrollAnimation />
      </body>
    </html>
  );
}
