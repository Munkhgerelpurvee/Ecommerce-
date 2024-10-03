"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../../../components/ui/button";
import { api } from "../../../axios";
import axios from "axios";
import { Container } from "./Container";

const slides = [
  {
    title: "2024 оны хамгийн шинэ загвар",

    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459216/samples/chair.png",
    price: 50,
    logo: "/images/Vector 14.png",
  },
  {
    title: "2024 оны хамгийн шинэ загвар",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1726459208/samples/ecommerce/shoes.png",

    price: 85,
    logo: "/images/Vector 14.png",
  },
  {
    title: "2024 оны хамгийн шинэ загвар",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727318028/sj15gzyjcsawu8punvuc.png",

    price: 35,
    logo: "/images/Vector 14.png",
  },
];

console.log(process.env.NEXT_PUBLIC_API);

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
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

  return (
    <>
      <Container>
        <div className="rounded-2xl my-10 h-[800px] overflow-hidden border relative border-blue-800 ">
          <h1>{res}</h1>

          <div
            className="w-[300%] h-full flex [&>div]:5xl"
            style={{
              transform: `translateX(-${(slideIndex * 100) / 3}%)`,
              transition: "transform 0.5s",
            }}
          >
            {slides.map((slideItem, index) => {
              return (
                <div key={index} className="w-[100%]">
                  <Slide
                    title={slideItem.title}
                    src={slideItem.src}
                    price={slideItem.price}
                    logo={slideItem.logo}
                  />
                </div>
              );
            })}
          </div>

          <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
            {slides.map((_, index) => (
              <Indicator
                key={index}
                activeColor={index === slideIndex}
                setSlideIndex={setSlideIndex}
                onClick={() => setSlideIndex(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

type SlideProps = {
  title: string;
  src: string;
  price: number;
  logo: string;
};

const Slide = ({ title, src, price, logo }: SlideProps) => {
  return (
    <div className="flex h-full  bg-[#EAD6D5]">
      <div className="flex gap-x-10">
        <div className=" flex flex-1 flex-col justify-center">
          <h6 className="text-xs">Тав тухтай орчинг таны амьдралд</h6>
          <div className=" text-[#000] font-semibold text-[33px]"> {title}</div>
          <h6 className="text-xs">
            Швед улсын хамгийн шилдэг брэндийг албан ёсны эрхтэйгээр оруулж ирж
            байна
          </h6>

          <Button className="bg-[#FB2E86] w-32 font-light text-[#fff] mt-6">
            Дэлгэрэнгүй
          </Button>
        </div>

        <div className="flex flex-1 relative">
          <div className="w-[400px] h-[400px] left-[400px] top-[185px] rounded-full bg-[#ECD2FA] absolute opacity-35 "></div>
          <div>
            <Image
              src={src}
              alt="Logo"
              width={430}
              height={430}
              priority={true}
              className="object-cover absolute w-[200px] h-[200px] left-[520px] top-[285px]"
            />
          </div>
        </div>
        <div className="flex flex-1 relative">
          <Image
            src={logo}
            alt="CVG-Logo"
            width={135}
            height={135}
            priority={true}
            className="object-cover absolute left-[500px] top-[165px] w-[100px] h-[100px] "
          />

          <div className="text-[#fff] font-medium absolute left-[550px] top-[220px]">
            {price}%
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

type IndicatorProps = {
  activeColor: boolean;
  onClick: () => void;

  setSlideIndex: (index: number) => void;
};

const Indicator = ({ activeColor, onClick }: IndicatorProps) => {
  return (
    <div
      className={`w-6 h-6 rounded-md bg-slate-500 ${
        activeColor ? "bg-slate-800" : ""
      }`}
      onClick={onClick}
    ></div>
  );
};
