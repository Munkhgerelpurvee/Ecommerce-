"use client";

import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AddCategory = () => {
  interface Product {
    _id: string;
    productName: string;
    price: number;
    image: [string];
    category: Category[];
    size: string[];
    quantity: number;
  }

  interface Category {
    _id: string;
    categoryName: string;
  }

  return (
    <>
      Admin Add Products
      <div className="felx-1 bg-green-300">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 border border-b-[#ECEDF0]">
            <div>Add Category</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
