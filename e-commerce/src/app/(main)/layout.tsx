import { PropsWithChildren } from "react";
import { CartProvider } from "./components/providers/CartProvider";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <CartProvider>
      MAIN
      <div>NOT ADMIN LAYOUT</div>
      {children}
    </CartProvider>
  );
};

export default Layout;
