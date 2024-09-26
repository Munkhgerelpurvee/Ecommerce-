"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { api } from "../axios";
import { Container } from "./Container";

const slidesHoodie = [
  {
    title: "Wildflower Hoodie",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727317982/iqy9ddrq9z3f8xq2mrmm.png",
    price: 120,
  },
  {
    title: "Wildflower Hoodie",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727317982/iqy9ddrq9z3f8xq2mrmm.png",
    price: 85,
  },
  {
    title: "Wildflower Hoodie",
    src: "https://res.cloudinary.com/dkjxck7iu/image/upload/v1727317982/iqy9ddrq9z3f8xq2mrmm.png",
    price: 35,
  },
];

console.log(process.env.NEXT_PUBLIC_API);

export const CarouselHoodie = () => {
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
        <div className=" h-[600px] rounded-xl overflow-hidden  relative ">
          <h1>{res}</h1>
          {/* Slide-g component bolgoh */}
          <div
            className="w-[300%] h-full flex [&>div]:5xl"
            style={{
              transform: `translateX(-${(slideIndex * 100) / 3}%)`,
              transition: "transform 0.5s",
            }}
          >
            {slidesHoodie.map((slideItem, index) => {
              return (
                <div key={index} className="w-[100%]">
                  <Slide
                    title={slideItem.title}
                    src={slideItem.src}
                    price={slideItem.price}
                  />
                </div>
              );
            })}
          </div>
          {/* slideIndex-iig component bolgoh */}
          <div className="absolute flex gap-4 bottom-4 left-[calc(50%-52px)]">
            {slidesHoodie.map((_, index) => (
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

// Slide-g component bolgoh
type SlideProps = {
  title: string;
  src: string;
  price: number;
};

const Slide = ({ title, src, price }: SlideProps) => {
  return (
    <div className="flex h-full bg-[#EAD6D5]">
      <Image
        src={src}
        alt="Logo"
        width={900}
        height={900}
        priority={true}
        //   layout="fill"
        className="object-cover w-full h-full "
      />
      <div className="flex relative">
        <div className="text-[#fff] font-normal absolute left-[50px] bottom-[50px]">
          {price}$
          <div className=" text-[#000] font-semibold text-[13px]"> {title}</div>
        </div>
      </div>
      {/*  */}
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
