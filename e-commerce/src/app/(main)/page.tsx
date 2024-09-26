import Image from "next/image";
// import { Carousel } from "@/components/ui/carousel";
import { Carousel } from "../../components/Carousel";
import { CarouselHoodie } from "../../components/CarouselHoodie";
import { ProductGrid } from "../../components/ProductGrid";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <CarouselHoodie />
      <ProductGrid />
      <Image
        src={`https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459218/cld-sample-4.jpg`}
        width={1200}
        height={100}
        alt="icon"
        className=" flex
         h-96 items-center justify-center mb-80"
      />

      <Footer />
    </>
  );
}

export default Home;
