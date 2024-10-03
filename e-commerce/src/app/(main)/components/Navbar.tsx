import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <main className="flex justify-between p-4 border bg-black ">
      <div className="flex items-center gap-4">
        <Image
          src="/images/Vector.png"
          alt="Vecvor Logo"
          className="dark:invert"
          width={27}
          height={27}
        />
        <Link href="/">
          <div className=" text-[#fff] text-sm font-normal ">ECOMMERCE</div>
        </Link>

        <Link href="/products">
          <p className=" text-[#fff] text-sm font-normal ">Ангилал</p>
        </Link>
      </div>

      <div className="flex gap-4 justify-center items-center ">
        <Heart className="text-[#fff] " />
        <ShoppingCart className="text-[#fff] " />
        <Link href="/register">
          <Button className="bg-black border border-[#2563EB] font-normal text-sm">
            Бүртгүүлэх
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-[#0166FF] font-normal text-sm">Нэвтрэх</Button>
        </Link>
      </div>
    </main>
  );
};
