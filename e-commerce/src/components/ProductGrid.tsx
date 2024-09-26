"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../axios";
import { Container } from "./Container";
import { ProductCard } from "./ProductCard";

const slidesProduct = [
  {
    title: "The Prompt Magazine",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459207/samples/people/kitchen-bar.jpg",
    price: 120,
  },
  {
    title: "Chunky Glyph Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459215/samples/shoe.jpg",
    price: 85,
  },
  {
    title: "All Smiles Nalgene",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318115/mjeufvpfagl2b5l0jugz.png",
    price: 35,
  },
  {
    title: "Wildflower Hoodie",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318147/opfpkhetjtwqrk2en640.png",
    price: 45,
  },
  {
    title: "Inkblot Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318181/iwlaxb7qznvgqsdmgfla.png",
    price: 55,
  },
  {
    title: "Gestures Longsleeve",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318220/uu8elsxfulzjoozq8vwl.png",
    price: 65,
  },
  {
    title: "Chunky Glyph Cap",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318248/kdj9db7gmyeww2ajqchp.png",
    price: 75,
  },
  {
    title: "Local Styles Crewneck",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318283/zkirled7g8lr7ycmomjh.png",
    price: 85,
  },
  {
    title: "Doodle Hoodie",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318322/m561trvteljcrl18ysw8.png",
    price: 95,
  },
  {
    title: "Chunky Glyph Cap",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459217/samples/woman-on-a-football-field.jpg",
    price: 95,
  },
  {
    title: "Chunky Glyph Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318088/kx2csnd7dj9m4zmwpqbf.png",
    price: 95,
  },
  {
    title: "All Smiles Nalgene",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318115/mjeufvpfagl2b5l0jugz.png",
    price: 35,
  },
  {
    title: "The Prompt Magazine",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459216/samples/outdoor-woman.jpg",
    price: 120,
  },
  {
    title: "Independent Corners Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318343/inxmyjztlhu2u3zo4b1j.png",
    price: 120,
  },
  {
    title: "Independent Corners Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459209/samples/ecommerce/leather-bag-gray.jpg",
    price: 120,
  },
  {
    title: "The Prompt Magazine",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459213/samples/two-ladies.jpg",
    price: 120,
  },
  {
    title: "Chunky Glyph Tee",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459207/samples/ecommerce/analog-classic.jpg",
    price: 85,
  },
  {
    title: "All Smiles Nalgene",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459208/samples/ecommerce/shoes.png",
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
