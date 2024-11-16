import dynamic from "next/dynamic";
import BurgerMenu from "@/lib/components/nav/burger_menu";

const WelcomePage = dynamic(() => import("../lib/components/pages/welcome_page"), {
  ssr: false,
});

const HomepageScreen = dynamic(() => import("./home/page"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <WelcomePage />
      <BurgerMenu />
      <HomepageScreen />
    </div>
  );
}
