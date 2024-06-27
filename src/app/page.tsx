import Footer from "@/lib/components/footer";
import Navbar from "@/lib/components/navabr/navbar_body";
import StickCursor from "@/lib/components/utils/cursor";
import ClientComponent from "@/lib/pages/menu_page";

export default function Home() {
  return (
    <div>
      <StickCursor />
      <ClientComponent />
      <Footer />
      <Navbar links={[]} /> {}
    </div>
  );
}
