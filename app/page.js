import Homepage from "./components/homepage/homepage.component";
import Brand from "./components/brand/brand.component";
import Footer from "./components/footer/footer.component";
import Banner from "./components/banner/banner.component";

export default function Home() {
  return (
    <div>
      <Homepage />
      <Banner />
      <Brand />
      <Footer />
    </div>
  );
}
