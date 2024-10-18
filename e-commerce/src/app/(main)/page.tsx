import Image from "next/image";
// import { Carousel } from "@/components/ui/carousel";
import { Carousel } from "./components/Carousel";
import { CarouselHoodie } from "./components/CarouselHoodie";
import { ProductGrid } from "./components/ProductGrid";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { TestUserCard } from "./components/TsetUserCard";
import { TestUserList } from "./components/TsetUserList";
import users from "./MOCK_DATA.json";
import App from "../(main)/components/FilterablaProductTable";

function Home() {
  const close = () => {
    return false;
  };
  return (
    <>
      <Navbar />
      <ProductGrid />
      <Image
        src={`https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459218/cld-sample-4.jpg`}
        width={1200}
        height={100}
        alt="icon"
        className=" flex
         h-96 items-center justify-center mb-20 m-auto"
      />
      <TestUserCard
        userProps={{
          first_name: "Naraa",
          last_name: "Bataa",
          gender: "man",
          ip_address: "210.49.34.197",
          email: "tweddeburn1d@hud.gov",
        }}
        closeProps={close}
      />
      <TestUserList usersList={users} />
      <App />

      <Footer />
    </>
  );
}

export default Home;
