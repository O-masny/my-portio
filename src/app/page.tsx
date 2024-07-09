import dynamic from "next/dynamic";
import Footer from "@/lib/components/footer";
import StickCursor from "@/lib/components/utils/cursor";

const WelcomePage = dynamic(() => import("../lib/screens/welcome_page"), {
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
    </div>
  );
}
