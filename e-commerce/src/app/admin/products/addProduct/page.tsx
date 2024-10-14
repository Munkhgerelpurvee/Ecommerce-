"use client";
import express, { Request, Response, NextFunction } from "express";

import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { ArrowBigLeft } from "lucide-react";
import { RequestHandler } from "express";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface addProductType {
  productName: string;
  description: String;
  productCode: Number;
  price: number;
  image: [string];
  categories: string[];
  size: string[];
  quantity: number;
}

interface categories {
  _id: string;
  categoryName: string;
}

//

const AddProduct = () => {
  const [productName, setProductName] = useState<string>("");
  console.log(productName);
  const [addDescription, setAddDescription] = useState<string>("");
  console.log(addDescription);
  const [addProductCode, setAddProductCode] = useState<number>(0);
  console.log(addProductCode);

  // if (!productName || !addDescription || !addProductCode) {
  //   // console.log("productName:", productName);
  //   // console.log("description:", addDescription);
  //   // console.log("productCode:", addProductCode);

  //   return;
  // }
  const createProduct = async () => {
    try {
      const response = await api.post("/product", {
        productName: productName,
        description: addDescription,
        productCode: addProductCode,
      });

      setProductName("");
      setAddDescription("");

      console.log(response.data.message);
    } catch (error) {
      console.log(
        " Error happenned to create PRODUCT admin--addProduct",
        error
      );
    }
  };

  // console.log(createProduct, "create PRODUCT admin--addProduct");

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 bg-[#1C202414] mx-10">
        <div className="flex gap-5 p-4 bg-green-300">
          <div className="">
            <Link href="/admin/products">
              <ArrowBigLeft />
            </Link>
          </div>
          <div>Бүтээгдэхүүн нэмэх</div>
        </div>
        {/*  */}
        <div className="flex gap-5 bg-pink-300">
          <div className="flex-1 bg-yellow-300">
            flex1
            <div className="p-6 flex flex-col bg-white rounded-lg gap-4">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-[#121316]">
                  Бүтээгдэхүүний нэр
                </div>
                <input
                  placeholder="Нэр"
                  className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full"
                  value={productName}
                  onChange={(event) => setProductName(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-[#121316]">
                  Нэмэлт мэдээлэл
                </div>
                <textarea
                  placeholder="Гол онцлог, давуу тал, техникийн үзүүлэлтүүдийг онцолсон дэлгэрэнгүй, сонирхолтой тайлбар."
                  className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full resize-none"
                  value={addDescription}
                  onChange={(event) => setAddDescription(event.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-[#121316]">
                  Барааны код
                </div>
                <input
                  placeholder="#12345678"
                  className="bg-[#F7F7F8] text-[#8B8E95] p-2 rounded-lg w-full"
                  value={addProductCode}
                  onChange={(event) =>
                    setAddProductCode(parseFloat(event.target.value))
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col bg-blue-300">
            <div className="bg-green-200 rounded-lg w-full flex flex-col "></div>
            flex2
            <div className="w-full flex justify-center">
              <div className="flex gap-6">
                <div
                  onClick={() => createProduct()}
                  className="bg-white text-black font-semibold cursor-pointer rounded-lg w-fit px-5 py-2 text-lg"
                >
                  Ноорог
                </div>
                <div
                  onClick={() => createProduct()}
                  className="bg-black text-white font-semibold cursor-pointer rounded-lg w-fit px-5 py-2 text-lg"
                >
                  Нийтлэх
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
