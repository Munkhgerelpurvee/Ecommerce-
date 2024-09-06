import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";

export const Navbar = () => {
  return (
    <div>
      <main className="flex justify-between p-4 border bg-black ">
        <div className="flex items-center gap-4">
          <Link href="/Log-in">
            <Image
              src="/images/Vector.png"
              alt="Vecvor Logo"
              className="dark:invert"
              width={27}
              height={27}
            />
          </Link>

          <Link href="/dashboard">
            <p className=" text-[#fff] text-sm font-normal ">Бүтээгдэхүүн</p>
          </Link>
        </div>

        <div className="flex gap-4 justify-center items-center ">
          <ShoppingCart className="text-[#fff] " />
          <Heart className="text-[#fff] " />
          <Button className="bg-black border border-[#2563EB] font-normal text-sm">
            Бүртгүүлэх
          </Button>
          <Button className="bg-[#0166FF] font-normal text-sm">Нэвтрэх</Button>
        </div>
      </main>
    </div>
  );
};
