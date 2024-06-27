import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar_body";
import StickCursor from "@/lib/components/utils/cursor";
import HomepageScreen from "@/lib/pages/menu_page";
import dynamic from "next/dynamic";

export default function Home() {
  const HomepageScreen = dynamic(() => import("../lib/pages/menu_page"), {
    ssr: false,
  });
  return (
    <div>
      <StickCursor />
      <HomepageScreen />
      <Footer />
      <Navbar links={[]} /> {}
    </div>
  );
}
