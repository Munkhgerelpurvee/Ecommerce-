"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../axios";
import { Container } from "./Container";
import { ProductCard1 } from "./ProductCard";

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

// export const ProductGrid = () => {
//   const [res, setRes] = useState<string>("");
//   useEffect(() => {
//     const getData = async () => {
//       try {
//         console.log("HELLOOOO CAROUSEL from FRONTEND");

//         const res = await api.get("/");
//         setRes(res.data.message);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getData();
//   }, []);

//   return (
//     <Container>
//       <h1>{res}</h1>

//       <div className="grid grid-cols-4 grid-rows-5 [&>div:nth-child(7)]:col-span-2 [&>div:nth-child(8)]:col-span-2   gap-6 my-10">
//         {slidesProduct.map((product, index) => {
//           const customHeigh =
//             index === 6 ? "h-[690px]" : index === 7 ? "h-[690px]" : "h-[330px]";
//           return (
//             <ProductCard
//               key={index}
//               title={product.title}
//               price={product.price}
//               src={product.src}
//               customHeigh={customHeigh}
//             />
//           );
//         })}
//         ;
//       </div>
//     </Container>
//   );
// };

// // Slide-g component bolgoh
// type ProductCardProps = {
//   title: string;
//   src: string;
//   price: number;
//   customHeigh?: string;
// };

// const ProductCard = ({ title, src, price, customHeigh }: ProductCardProps) => {
//   return (
//     <div className={` border rounded-lg mb-4 bg-white hover:shadow-lg  `}>
//       <div className={`${customHeigh} relative w-full`}>
//         <Image src={src} alt="Logo" fill className="object-cover" />
//       </div>

//       <div className="mt-4">
//         <h2 className="text-lg font-medium ">{title}</h2>
//         <p className="text-gray-500 mt-1">{price}</p>
//       </div>
//     </div>
//   );
// };
//
export const ProductGrid = () => {
  return (
    <Container>
      <div className=" grid grid-cols-4 grid-rows-5 gap-5 my-10 [&>div:nth-child(7)]:col-span-2  [&>div:nth-child(8)]:col-span-2 ">
        {slidesProduct.map((item, index) => {
          const customHeigh =
            index === 6
              ? "h-[690px] w-full"
              : index === 7
              ? "h-[690px] w-full"
              : "h-[330px] w-full";

          return (
            <ProductCard1
              key={index}
              src={item.src}
              title={item.title}
              price={item.price}
              customHeigh={customHeigh}
            />
          );
        })}
      </div>
    </Container>
  );
};
