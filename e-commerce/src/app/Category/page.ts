"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../../axios";
import { Container } from "../../components/Container";
import { ProductCard1 } from "../../components/ProductCard";

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

export const ProductGrid = () => {
  const [res, setRes] = useState<string>("");
  useEffect(() => {
    const getData = async () => {
      try {
        console.log("HELLOOOO CAROUSEL from FRONTEND");

        const res = await api.get("/");
        setRes(res.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
};
