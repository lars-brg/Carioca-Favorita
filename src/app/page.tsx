import AboutUsSection from "@/components/AboutUsSection/AboutUsSection";
import ValuesMosaic from "@/components/AboutUsSection/ValuesMosaic";
import CarouselSection from "@/components/CarouselSection/CarouselSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import NavBar from "@/components/Navbar/NavBar";
import { ProductsSection } from "@/components/ProductsSection/ProductsSection";


export default function Home() {
  return (
    <div>
      <NavBar/>
      <CarouselSection/>
      <ProductsSection />
      <AboutUsSection />
      <ContactSection/>
    </div>
  );
}
