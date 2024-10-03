"use client";

import { api } from "@/axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProduct = () => {
  return (
    <>
      Admin Add Products
      <div className="felx-1 bg-green-300">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 border border-b-[#ECEDF0]">
            <div>Add Products</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
