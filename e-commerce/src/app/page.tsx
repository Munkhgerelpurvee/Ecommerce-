import Image from "next/image";
// import { Carousel } from "@/components/ui/carousel";
import { Carousel } from "../components/Carousel";
import { CarouselHoodie } from "../components/CarouselHoodie";
import { ProductGrid } from "../components/ProductGrid";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <CarouselHoodie />
      <ProductGrid />
      <Footer />
    </>
  );
}
