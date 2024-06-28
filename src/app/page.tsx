import dynamic from "next/dynamic";
import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar_body";
import StickCursor from "@/lib/components/utils/cursor";

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
      <StickCursor />
      <HomepageScreen />
      <Footer />
      <Navbar links={[]} />
    </div>
  );
}
