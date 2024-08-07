import dynamic from "next/dynamic";
import Footer from "@/lib/components/footer";
import StickCursor from "@/lib/components/utils/cursor";
import NavbarComponent from "@/lib/components/nav/navbar";
import Background from "@/lib/components/utils/animated_parallax";
import ResponsiveScrollAnimation from "@/lib/components/utils/square_scroll";
import BurgerMenu from "@/lib/components/nav/burger_menu";
import BloomingFlower from "@/lib/components/utils/blooming_flower";

// Dynamicky importujeme WelcomePage, která je klientskou komponentou
const WelcomePage = dynamic(() => import("../lib/pages/welcome_page"), {
  ssr: false,
});

// Dynamicky importujeme HomepageScreen, která je klientskou komponentou
const HomepageScreen = dynamic(() => import("./home/page"), {
  ssr: false,
  loading: () => <WelcomePage />,
});

export default function Home() {
  return (
    <div>
      <BurgerMenu />
      <HomepageScreen />
      <Footer />
    </div>
  );
}
