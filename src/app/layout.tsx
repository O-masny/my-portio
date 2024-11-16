import { Bitter, Bebas_Neue } from "next/font/google";
import "../app/globals.css";
import PageTransition from "@/lib/components/utils/animations/pageTransition";
import Template from "@/lib/components/utils/animations/pageTransition";

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata = {
  title: "OMA",
  description: "Portfolio - Ondrej Masny",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={bebas.className}>
      <body className={bitter.className}>
        <div
          id="transition-element"
          className="fixed inset-0 bg-black z-50"
          style={{ transform: "translateX(-100%)" }}
        />
        <Template >
          {children}
        </Template >

      </body>
    </html>
  );
}
