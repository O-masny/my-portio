import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar_body";
import StickCursor from "@/lib/components/utils/cursor";
import HomepageScreen from "@/lib/pages/menu_page";

export default function Home() {
  return (
    <div>
      <StickCursor />
      <HomepageScreen />
      <Footer />
      <Navbar links={[]} /> {}
    </div>
  );
}
