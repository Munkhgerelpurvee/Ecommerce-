"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
const slides = [
  {
    title: "2024 оны хамгийн шинэ загвар",
    src: "/images/image 1173.png",
    price: 50,
    logo: "/images/Vector 14.png",
  },
  {
    title: "2024 оны хамгийн шинэ загвар",
    src: "/images/image 1165.png",
    price: 85,
    logo: "/images/Vector 14.png",
  },
  {
    title: "2024 оны хамгийн шинэ загвар",
    src: "/images/Living-Room 1@2x.png",
    price: 35,
    logo: "/images/Vector 14.png",
  },
];

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  return (
    <>
      <div className="w-screen h-[800px] overflow-hidden border relative border-blue-800 ">
        {/* Slide-g component bolgoh */}
        <div
          className="w-[300%] h-full flex [&>div]:5xl"
          style={{
            transform: `translateX(-${(slideIndex * 100) / 3}%)`,
            transition: "transform 0.5s",
          }}
        >
          {/* <div className="flex-1 h-full flex justify-center items-center">
            Slide1
          </div>
          <div className="flex-1 h-full flex justify-center items-center">
            Slide2
          </div>
          <div className="flex-1 h-full flex justify-center items-center">
            Slide3
          </div> */}

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
        {/* slideIndex-iig component bolgoh */}
        <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
          {/* <div
            className={`w-6 h-6 rounded-md ${
              slideIndex === 0 ? "bg-slate-700" : "bg-slate-400"
            } `}
            onClick={() => {
              setSlideIndex(0);
            }}
          ></div>
          <div
            className={`w-6 h-6 rounded-md ${
              slideIndex === 1 ? "bg-slate-700" : "bg-slate-400"
            } `}
            onClick={() => {
              setSlideIndex(1);
            }}
          ></div>
          <div
            className={`w-6 h-6 rounded-md ${
              slideIndex === 2 ? "bg-slate-700" : "bg-slate-400"
            } `}
            onClick={() => {
              setSlideIndex(2);
            }}
          ></div> */}
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
    </>
  );
};

// Slide-g component bolgoh
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

        {/* <Image src={image} className="object-cover w-full h-full" /> */}
        <div className="flex flex-1 relative">
          <div className="w-[450px] h-[450px] rounded-full bg-[#ECD2FA] absolute opacity-35 "></div>
          <div>
            <Image
              src={src}
              alt="Logo"
              width={430}
              height={430}
              className="object-cover absolute left-[700px] top-[185px]"
            />
          </div>
        </div>
      </div>
      {/*  */}/<div className="text-[#fff] font-medium">{price}%</div>
      <div>
        <Image
          src={logo}
          alt="CVG-Logo"
          width={135}
          height={135}
          className="object-cover absolute left-[1080px] top-[165px]"
        />
      </div>
    </div>
  );
};

//   /* slideIndex-iig component bolgoh */

type IndicatorProps = {
  activeColor: boolean;
  onClick: () => void;
  //   setSlideIndex: Dispatch<SetStateAction<number>>;
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
