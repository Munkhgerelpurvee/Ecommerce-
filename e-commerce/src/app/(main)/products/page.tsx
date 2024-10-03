"use client";

import Image from "next/image";
import { api } from "@/axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

const sizeData = ["Free", "S", "M", "L", "XL", "2XL", "3XL"];
//
const Page = () => {
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

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [products, setproducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");

  useEffect(() => {
    // function getSizes
    const getSizes = async () => {
      setLoading(true);
      // console.log(selectedSize);

      try {
        const response = await api.get("/sizes");
        console.log(response.data, "========= getSizes");
        setSizes(response.data);
      } catch (error) {
        console.error(
          "getSizes backEnd-c getSizes авч чадсангүй SORRY:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    // function getProducts
    const getProducts = async () => {
      setLoading(true);

      try {
        const response = await api.get("/products", {
          params: {
            category: selectedCategory,
            size: selectedSize,
          },
        });
        console.log(response.data, "where is res.data DATA");

        //
        // const sizes = response.data.map(
        //   (productItem: Product) => productItem.size
        // );
        // setSizes(sizes);

        //

        setproducts(response.data as Product[]);
        console.log("FRONTEND getProducts FROM Be", response.data);
      } catch (error) {
        console.error("Products backEnd-c авч чадсангүй SORRY:", error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
    getSizes();
  }, [selectedCategory, selectedSize]);

  // console.log(sizes, "Item---SIZE");

  // console.log(products, "ene bol products");
  //

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await api.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.log("category авч чадсангүй");
      }
    };

    getCategories();
  }, []);

  // const filteredCategoryProducts = products
  //   .filter((product) => {
  //     if (selectedCategory === "") return true; // Show all products if no category is selected
  //     return product.category.some(
  //       (cat) => cat.categoryName === selectedCategory
  //     );
  //   })
  //   .filter((product) => {
  //     if (size === "" || size === null) return true;
  //     return product.size.includes(size);
  //   });
  // useEffect(() => {
  //   getProducts();
  //   getCategories();
  // }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div className="flex gap-10 justify-center ">
          <div className="border w-[245px] my-10">
            {/*  */}
            <div className="flex flex-col gap-4">
              <div
                className="font-bold cursor-pointer"
                onClick={() => setSelectedCategory([])}
              >
                Ангилал
              </div>
              <div className="flex flex-col">
                {categories?.map((item, index) => {
                  return (
                    // <div
                    //   onClick={() => setSelectedCategory(item.categoryName)}
                    //   key={index}
                    //   className={`cursor-pointer hover:text-green-400  hover:font-semibold duration-1000 ${
                    //     selectedCategory === item.categoryName
                    //       ? "underline"
                    //       : ""
                    //   }`}
                    // >
                    //   {item.categoryName}
                    // </div>

                    <div
                      key={index}
                      className="cursor-pointer"
                      style={{
                        color: selectedCategory.includes(item._id)
                          ? "blue"
                          : "",
                      }}
                      onClick={() =>
                        setSelectedCategory((prev) => {
                          if (prev.includes(item._id)) {
                            return prev.filter((id) => id !== item._id);
                          }
                          return [...prev, item._id];
                        })
                      }
                    >
                      {item.categoryName}
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 mt-5">
              <div
                className="cursor-pointer font-bold"
                onClick={() => setSizes([])}
              >
                Хэмжээ
              </div>
              <div className="flex flex-col">
                {sizes.map((sizeItem, index) => {
                  return (
                    <div
                      // onClick={() => setSize(item.size[index])}
                      // className={`cursor-pointer hover:text-green-400  hover:font-semibold duration-1000 ${
                      //   size === item.size[index] ? "underline" : ""
                      // }`}
                      key={index}
                      className="cursor-pointer"
                      style={{
                        color: selectedSize === sizeItem ? "green" : "",
                      }}
                      onClick={() => setSelectedSize(sizeItem)}
                    >
                      {sizeItem}
                    </div>
                  );
                })}
              </div>
            </div>
            {/*  */}
          </div>
          <Link href="/detail">
            <div className="grid grid-cols-3 grid-flow-row gap-5 my-10">
              {products &&
                products?.map((item, index) => {
                  const customHeigh =
                    index === 6
                      ? "h-[690px] w-full"
                      : index === 7
                      ? "h-[690px] w-full"
                      : "h-[330px] w-full";
                  return (
                    // <div key={index}>
                    //   {item.productName}
                    //   <div className="relative h-[600px] w-[300px]">
                    //     <Image
                    //       src={item.image[0]}
                    //       alt={item.productName}
                    //       fill
                    //       priority
                    //     />
                    //   </div>
                    // </div>
                    // <MainProductCard key={index} item={item} index={index} />
                    <div key={index}>
                      <CategoryCard
                        src={item.image[0]}
                        title={item.productName}
                        price={item.price}
                      />
                    </div>
                  );
                })}
            </div>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
};

type SlideProps = {
  title: string;
  src: string;
  price: number;
};

const CategoryCard = ({ title, src, price }: SlideProps) => {
  return (
    <div className="">
      <div className="flex h-full ">
        <Image
          src={src}
          alt="Logo"
          width={145}
          height={230}
          priority={true}
          // layout="fill"
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

export default Page;
