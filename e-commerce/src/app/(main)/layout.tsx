import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      MAIN
      {children}
    </>
  );
};

export default Layout;
