"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../axios";
import { Container } from "./Container";
import { ProductCard } from "./ProductCard";

const slidesProduct = [
  {
    title: "The Prompt Magazine",
    src: "/images/listCard1.png",
    price: 120,
  },
  {
    title: "Chunky Glyph Tee",
    src: "/images/listCard2.png",
    price: 85,
  },
  {
    title: "All Smiles Nalgene",
    src: "/images/listCard3.png",
    price: 35,
  },
  {
    title: "Wildflower Hoodie",
    src: "/images/listCard4.png",
    price: 45,
  },
  {
    title: "Inkblot Tee",
    src: "/images/listCard5.png",
    price: 55,
  },
  {
    title: "Gestures Longsleeve",
    src: "/images/listCard6.png",
    price: 65,
  },
  {
    title: "Chunky Glyph Cap",
    src: "/images/listCard7.png",
    price: 75,
  },
  {
    title: "Local Styles Crewneck",
    src: "/images/listCard8.png",
    price: 85,
  },
  {
    title: "Doodle Hoodie",
    src: "/images/listCard9.png",
    price: 95,
  },
  {
    title: "Chunky Glyph Cap",
    src: "/images/listCard7.png",
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
    src: "/images/listCard10.png",
    price: 120,
  },
  {
    title: "The Prompt Magazine",
    src: "/images/listCard1.png",
    price: 120,
  },
  {
    title: "Chunky Glyph Tee",
    src: "/images/listCard2.png",
    price: 85,
  },
  {
    title: "All Smiles Nalgene",
    src: "/images/listCard3.png",
    price: 35,
  },
];

console.log(process.env.NEXT_PUBLIC_API);

export const ProductGrid = () => {
  return (
    <Container>
      <div className=" grid grid-cols-4 grid-flow-row gap-5 my-10  [&>div:nth-child(7)]:bg-orange-500 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(7)]:row-span-2 [&>div:nth-child(8)]:bg-orange-500 [&>div:nth-child(8)]:col-span-2 [&>div:nth-child(8)]:row-span-2">
        {slidesProduct.map((item, index) => {
          const customHeigh =
            index === 6
              ? "h-[690px] w-full"
              : index === 7
              ? "h-[690px] w-full"
              : "h-[330px] w-full";

          return (
            <div key={index}>
              <ProductCard
                key={index}
                src={item.src}
                title={item.title}
                price={item.price}
                customHeigh={customHeigh}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
};
