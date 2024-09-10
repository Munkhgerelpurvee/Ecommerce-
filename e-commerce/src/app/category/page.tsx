"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../axios";
import { Container } from "../../components/Container";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

import { Checkbox } from "@/components/ui/checkbox";

const slidesCategory = [
  {
    title: "All Smiles Nalgene",
    src: "/images/listCard3.png",
    price: 120,
  },
  {
    title: "The Prompt Magazine",
    src: "/images/listCard1.png",
    price: 85,
  },
  {
    title: "Independent Corners Tee",
    src: "/images/listCard10.png",
    price: 35,
  },
  {
    title: "Wildflower Hoodie",
    src: "/images/listCard1.png",
    price: 45,
  },
  {
    title: "Inkblot Tee",
    src: "/images/listCard2.png",
    price: 55,
  },
  {
    title: "Gestures Longsleeve",
    src: "/images/listCard3.png",
    price: 65,
  },
  {
    title: "Chunky Glyph Cap",
    src: "/images/listCard3.png",
    price: 75,
  },
  {
    title: "Local Styles Crewneck",
    src: "/images/listCard1.png",
    price: 85,
  },
  {
    title: "Doodle Hoodie",
    src: "/images/listCard10.png",
    price: 95,
  },
  {
    title: "Chunky Glyph Cap",
    src: "/images/listCard1.png",
    price: 95,
  },
  {
    title: "Chunky Glyph Tee",
    src: "/images/listCard2.png",
    price: 95,
  },
  {
    title: "All Smiles Nalgene",
    src: "/images/listCard3.png",
    price: 35,
  },
  {
    title: "The Prompt Magazine",
    src: "/images/listCard1.png",
    price: 120,
  },
  {
    title: "Independent Corners Tee",
    src: "/images/listCard10.png",
    price: 120,
  },
  {
    title: "Independent Corners Tee",
    src: "/images/listCard9.png",
    price: 120,
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex gap-10 justify-center ">
          <div className="border w-[245px] my-10">
            <div className="">
              <h3 className="mb-5">Ангилал </h3>
              <div className="flex items-center space-x-2 mb-3 text-[#09090B] text-sm font-normal">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Малгай
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Усны сав
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  T-shirt
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hoodie
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tee
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Цүнх
                </label>
              </div>
            </div>
            <div>
              <h3 className="mb-5">Хэмжээ </h3>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Free
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  S
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  M
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  L
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  XL
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  2XL
                </label>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  3XL
                </label>
              </div>
            </div>
          </div>
          <Link href="/detail">
            <div className="grid grid-cols-3 grid-flow-row gap-5 my-10 ">
              {slidesCategory.map((item, index) => {
                return (
                  <div key={index}>
                    <CategoryCard
                      src={item.src}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
          </Link>
        </div>
      </Container>

      <Footer />
    </>
  );
}

// Slide-g component bolgoh
type SlideProps = {
  title: string;
  src: string;
  price: number;
};

const CategoryCard = ({ title, src, price }: SlideProps) => {
  return (
    <div className="">
      <div className="flex h-full ">
        <Image
          src={src}
          alt="Logo"
          width={145}
          height={230}
          priority={true}
          //   layout="fill"
          className="object-cover w-full h-full  rounded-xl "
        />
      </div>
      <div className="">
        <p className="text-base font-light text-black ">{title}</p>
        <p className="text-base font-bold text-black">{price}$</p>
      </div>
    </div>
  );
};
