"use client";
import { api } from "../../../axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface ProductType {
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

interface SearchCardProps {
  searchTerm: string;
}

export const SearchCard = ({ searchTerm }: SearchCardProps) => {
  const [product, setProduct] = useState<ProductType[]>([]); // List of products
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]); // Filtered products
  // Fetch all products when the component mounts
  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      if (Array.isArray(response.data)) {
        setProduct(response.data);
        console.log("SearchCard Component", response.data);
      }
    } catch (error) {
      console.error("Expected products to be an array, but got:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      if (Array.isArray(product)) {
        const filtered = product.filter((item) =>
          item.productName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts([]); // Хэрвээ product массив биш бол хоосон массив буцаах
      }
    } else {
      setFilteredProducts([]); // Хэрвээ хайлтын үг байхгүй бол бүх үр дүнг цэвэрлэх
    }
  }, [searchTerm, product]);
  return (
    <div className="flex flex-col  gap-6 p-2 bg-green-100 shadow-md rounded-md">
      {/* Display filtered products */}
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item, index) => (
          <Link
            key={index}
            href={`/product/${item._id}`}
            className="w-full border-b border-gray-300 hover:bg-gray-100 transition duration-200"
          >
            <div className="flex items-center gap-4 py-4 bg-red-50">
              <div className="relative h-[60px] w-[60px] rounded-full overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src={item.image[0]}
                  fill
                  alt={item.productName}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="font-semibold text-lg text-gray-800">
                  {item.productName}
                </div>
                <div className="text-gray-600 text-sm">{item.price}₮</div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center py-4">Бүтээгдэхүүн олдсонгүй</p>
      )}
    </div>
  );
};
