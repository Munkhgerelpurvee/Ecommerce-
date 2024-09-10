"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../components/Container";
import { Button } from "../../components/ui/button";
import { Heart } from "lucide-react";
import { Star } from "lucide-react";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
//
const detailPics = [
  "/images/detail1.png",
  "/images/detail2.png",
  "/images/detail3.png",
  "/images/detail4.png",
];
const detailSizes = ["S", "M", "L", "XL", "2XL"];
const slidesDetail = [
  {
    title: "All Smiles Nalgene",
    src: "/images/listCard2.png",
    price: 120,
  },
  {
    title: "The Prompt Magazine",
    src: "/images/listCard3.png",
    price: 85,
  },
  {
    title: "Independent Corners Tee",
    src: "/images/listCard1.png",
    price: 35,
  },
  {
    title: "Wildflower Hoodie",
    src: "/images/listCard4.png",
    price: 45,
  },
  {
    title: "Inkblot Tee",
    src: "/images/listCard10.png",
    price: 55,
  },
  {
    title: "Gestures Longsleeve",
    src: "/images/listCard8.png",
    price: 65,
  },
  {
    title: "Chunky Glyph Cap",
    src: "/images/listCard9.png",
    price: 75,
  },
  {
    title: "Local Styles Crewneck",
    src: "/images/listCard7.png",
    price: 85,
  },
];
export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col">
          <div className="flex bg-green-400 items-center justify-center gap-5">
            <div className="flex1 flex-col gap-2 bg-blue-400">
              {detailPics.map((detail, index) => {
                return (
                  <>
                    <Image
                      key={index}
                      src={detail}
                      alt="Logo"
                      width={67}
                      height={100}
                      priority={true}
                      //   layout="fill"
                      className="object-cover w-[67px] h-[100px] rounded-xl mb-2"
                    />
                  </>
                );
              })}
            </div>
            <div className="">
              <Image
                src="/images/detail1.png"
                alt="Logo"
                width={67}
                height={100}
                priority={true}
                //   layout="fill"
                className="object-cover w-[509px] h-[520px]  rounded-xl mb-2"
              />
            </div>

            <div>
              <div className="flex1 flex-col bg-pink-300 ">
                <button className="bg-white text-black flex mb-3 border border-blue-600 rounded-full px-2 text-xs">
                  Шинэ
                </button>
                <div className="flex gap-4 mb-3">
                  Wildflower Hoodie
                  <Heart className="text-[#fff] " />
                </div>

                <p className="text-base font-light text-black mb-3 ">
                  Зэрлэг цэцгийн зурагтай даавуун материалтай цамц
                </p>
                <div className="flex flex-col mb-3">
                  <h3>Хэмжээний заавар</h3>
                  <div className="flex gap-2">
                    {detailSizes.map((detailSize, index) => {
                      return (
                        <div className="border border-black w-8 h-8 rounded-full flex justify-center items-center text-[10px]">
                          {detailSize}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <div className="flex gap-4 items-center mb-3">
                    <div className="border border-black w-8 h-8 rounded-full flex justify-center items-center">
                      -
                    </div>
                    1
                    <div className="border border-black w-8 h-8 rounded-full flex justify-center items-center">
                      +
                    </div>
                  </div>
                </div>
                <div>{120}$</div>
                <Button className=" text-[#fff] flex rounded-2xl bg-[#2563EB] mt-3">
                  Сагсанд нэмэх
                </Button>
              </div>
              <div className=" flex flex-col gap-4 mt-3">
                <div className="flex gap-3">
                  <p>Үнэлгээ</p>
                  <Link href="#" className="text-[#2563EB]">
                    бүгдийг харах
                  </Link>
                </div>
                <div className="flex gap-2">
                  <Star className="text-yellow-300" />
                  <Star className="text-yellow-300" />
                  <Star className="text-yellow-300" />
                  <Star className="text-yellow-300" />
                  4.6
                  <p className="text-[#71717A]"> (24)</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-orange-300">
            <h3 className="font-bold text-[30px] mt-3"> Холбоотой бараа</h3>
            <div className="grid grid-cols-4 grid-flow-row gap-5 my-10 ">
              {slidesDetail.map((item, index) => {
                return (
                  <div key={index}>
                    <DetailCard
                      src={item.src}
                      title={item.title}
                      price={item.price}
                    />
                  </div>
                );
              })}
            </div>
          </div>
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

const DetailCard = ({ title, src, price }: SlideProps) => {
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
