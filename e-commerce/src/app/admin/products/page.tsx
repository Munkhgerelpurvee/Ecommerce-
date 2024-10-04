"use client";

import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Page = () => {
  interface Product {
    _id: string;
    productName: string;
    price: number;
    image: [string];
    categories: Category[];
    size: string[];
    quantity: number;
    createdAt: string;
    updatedAt: string;
  }

  interface Category {
    _id: string;
    categoryName: string;
  }

  interface CategoriesResponse {
    categories: Category[];
  }
  interface ReviewType {
    _id: string;
    price: string;
    category: Category[];
    size: string[];
    quantity: number;
    createdAt: string;
    updatedAt: string;
  }

  const [products, setproducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchProductInput, setSearchProductInput] = useState<string>("");
  const [prices, setPrices] = useState<number>();
  const [review, setReview] = useState<ReviewType[]>([]);
  const [selectedReview, setSelectedReview] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<{}>("");
  const priceOption = [
    { min: 0, max: 10000 },
    { min: 10000, max: 50000 },
    { min: 50000, max: 100000 },
    { min: 100000, max: 500000 },
    { min: 500000, max: "500000-as deesh" },
  ];

  //
  const getProducts = async () => {
    try {
      const response = await api.get("/products", {
        params: {
          selectedPrice: selectedPrice,
          category: [selectedCategory],
        },
      });
      console.log(response.data, "=================");

      setproducts(response.data as Product[]);
      //
      console.log("FRONTEND getProducts FROM Be", response.data);
    } catch (error) {
      console.error("Products backEnd-c авч чадсангүй SORRY:", error);
    }
  };

  console.log(products, "bbbbbbbhhhhgg");

  //
  const getCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      console.log("getCategories авч чадсангүй from ---- admin/products/page");
    }
  };
  // getReview

  const getReview = async () => {
    // Make the API call
    try {
      // console.log(parsedPrice);

      const response = await api.get("/review"); // Ensure parsedPrice is passed correctly
      setReview(response.data as ReviewType[]);
    } catch (error) {
      console.log("Error fetching reviews: ", error);
    }
  };

  console.log(review, "getReview---");

  useEffect(() => {
    getProducts();
    getCategories();
    getReview();
  }, [selectedPrice, selectedCategory]);
  return (
    <>
      <div className="felx-1 bg-[#1C202414] ">
        <div className="flex flex-col gap-5 mx-10">
          <div className="flex gap-5 border border-b-[#ECEDF0]">
            <div className=" text-sm font-semibold">Бүтээгдэхүүн</div>
            <div className="text-sm text-[#3F4145]">Ангилал</div>
          </div>

          <Link href={`/admin/products/addProduct`} className="mb-5">
            <Button>+ Бүтээгдэхүүн нэмэх</Button>
          </Link>
        </div>
        <div className="flex justify-between mb-5 mx-10">
          <div className="flex gap-3">
            {/* category */}
            <Select
              onValueChange={(value) =>
                setSelectedCategory(value === "clear" ? "" : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Ангилал" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories?.map((item, index) => {
                    return (
                      <SelectItem key={index} value={item._id}>
                        {item.categoryName}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* price */}
            <Select
              onValueChange={(value) => {
                console.log(value);
                setSelectedPrice(value);
              }}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Үнэ" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {priceOption?.map((item, index) => {
                    return (
                      <SelectItem key={index} value={JSON.stringify(item)}>
                        {item.min} - {item.max}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* saraar */}
            <Select
              onValueChange={(value) =>
                setSelectedReview(value === "clear" ? "" : value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Сараар" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {review?.map((itemReview, index) => {
                    return (
                      <SelectItem key={index} value={itemReview.createdAt}>
                        {/* {format(itemReview.createdAt,"yyyy.MM.dd")} */}
                        {new Date(itemReview.createdAt).toLocaleDateString()}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-2">
            <Search />
            <input
              className="outline-none w-[360px]"
              placeholder="Бүтээгдэхүүний нэр"
              value={searchProductInput}
              onChange={(e) => setSearchProductInput(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col bg-blue-200 rounded-xl mx-10">
          <div className="flex w-full h-11 items-center border-b pl-4 ">
            <div className="flex-1">Бүтээгдэхүүн</div>
            <div className="flex-1">Ангилал</div>
            <div className="flex-1">Үнэ</div>
            <div className="flex-1">Үлдэгдэл</div>
            <div className="flex-1">Зарагдсан</div>
            <div className="flex-1"> Нэмсэн огноо</div>
          </div>
          <div className="bg-red-200">
            {products.slice(0, 11).map((item, index) => (
              <div key={index} className="flex border-t h-[62px] text-sm">
                <div className="flex-[2] flex items-center gap-[30px] justify-center pl-1">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border-black border"
                  />
                  <div className="flex gap-3 justify-center">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={item.image[0]} fill alt="aa" />
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-sm">
                        {item.productName}
                      </div>
                      <div className="text-[12px] text-[#5E6166]">
                        {item._id}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  {Array.isArray(item.categories) && item.categories.length > 0
                    ? item.categories[0].categoryName
                    : "No category"}

                  {/* {item.category[0]?.categoryName || "No category"} */}
                </div>
                <div className="flex-1 flex items-center justify-center">
                  {item.price}₮
                </div>
                <div className="flex-1 flex items-center justify-center">
                  {item.quantity}
                </div>

                <div className="flex-1 flex items-center justify-center">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </div>

                <div className="flex-1 flex items-center justify-center">
                  {new Date(item.createdAt).toLocaleDateString()}
                </div>
                <div className="flex-1 flex items-center justify-center gap-5 text-gray-500 ">
                  <Trash2 />
                  <Pencil />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
