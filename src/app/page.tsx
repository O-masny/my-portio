import dynamic from "next/dynamic";
import BurgerMenu from "@/lib/components/nav/burger_menu";
import Footer from "@/lib/components/utils/components/footer";

const WelcomePage = dynamic(() => import("../lib/pages/welcome_page"), {
  ssr: false,
});

const HomepageScreen = dynamic(() => import("./home/page"), {
  ssr: false,
  loading: () => <WelcomePage />,
});

export default function Home() {
  return (
    <div>
      <WelcomePage />
      <BurgerMenu />
      <HomepageScreen />
      <Footer />
    </div>
  );
}
