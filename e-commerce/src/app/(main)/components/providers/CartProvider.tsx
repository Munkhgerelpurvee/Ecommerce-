"use client";
// Lesson ==> 09.12
// Аль ч хуудаснаас карт руугаа бараа нэмж чаддаг баймаар байгаа
import {
  PropsWithChildren,
  useEffect,
  useState,
  useContext,
  createContext,
} from "react";

import { ProductCard } from "../ProductCard";
export type Product = {
  id: number;
  name: string;
  price: number;
};

// cartProduct нь миний карт дотор хадгалагдаж буй product-аас ялгаатай нь quantity нэмэгдэнэ
type CartProduct = {
  product: Product;
  quantity: number;
};

// cartContext нь доорх функц болон утгуудыг share хийнэ
type CartContextType = {
  cart: CartProduct[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  increaseProductQuantity: (product: Product) => void;
  decreaseProductQuantity: (product: Product) => void;
};
const CartContext = createContext<CartContextType>({} as CartContextType);
export const CartProvider = ({ children }: PropsWithChildren) => {
  // энэ useState нь CartProduct[] -ийн array-ийг хадгална гээд Type-ийг нь зааж өгсөн.
  const [cart, setCart] = useState<CartProduct[]>([]);
  //   const [cart, setCart] = useState<CartProduct[]>(
  //     JSON.parse(localStorage.getItem("cart") || "[]")
  //   );

  const addProductToCart = (product: Product) => {
    const existingProduct = cart.find((p) => p.product.id === product.id);
    if (existingProduct) {
      increaseProductQuantity(product);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };
  const removeProductFromCart = (product: Product) => {
    setCart(cart.filter((p) => p.product.id === product.id));
  };

  const increaseProductQuantity = (product: Product) => {
    setCart(
      cart.map((p) =>
        p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };
  const decreaseProductQuantity = (product: Product) => {
    const existingProduct = cart.find((p) => p.product.id === product.id);
    if (existingProduct?.quantity === 1) {
      removeProductFromCart(product);
    } else {
      setCart(
        cart.map((p) =>
          p.product.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
        )
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
  //   main-nii layout-iin cartContext-oor burj ugnu
};

export const useCart = () => useContext(CartContext);
