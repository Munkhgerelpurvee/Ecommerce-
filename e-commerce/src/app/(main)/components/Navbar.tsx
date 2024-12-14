"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { ProfileIcon } from "@/assets/ProfileIcon";
import { Search } from "@/assets/Search";
import { useState } from "react";
import { SearchCard } from "./SearchCard";

export const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <main className="flex justify-between p-4 border bg-black px-48 ">
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
      {/* Search Input */}
      <div className="sm:flex hidden w-full max-w-[300px] bg-[#71717A] items-center py-2 px-4 gap-4 rounded-md relative">
        <div className="text-white">
          <Search />
        </div>
        <input
          type="search"
          placeholder="Бүтээгдэхүүн хайх"
          className="bg-[#71717A] outline-none w-full text-sm sm:text-base"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex gap-4 justify-center items-center ">
        <Heart className="text-[#fff] " />
        <ShoppingCart className="text-[#fff] " />
        <Link href="userInfo">
          <ProfileIcon />
        </Link>
        <Link href="/register">
          <Button className="bg-black border border-[#2563EB] font-normal text-sm">
            Бүртгүүлэх
          </Button>
        </Link>
        <Link href="/login">
          <Button className="bg-[#0166FF] font-normal text-sm">Нэвтрэх</Button>
        </Link>
      </div>
      {/* Search Results Display */}
      {searchTerm && (
        <div className="bg-white flex absolute top-20 rounded-lg h-fit justify-center z-50 p-8 border max-w-[90%] md:max-w-[400px]">
          <SearchCard searchTerm={searchTerm} />
        </div>
      )}
    </main>
  );
};
