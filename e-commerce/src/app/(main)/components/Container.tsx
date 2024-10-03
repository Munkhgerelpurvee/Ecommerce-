import { ReactNode } from "react";
import { PropsWithChildren } from "react";

type ContainerProps = {
  background?: string | number;
  height?: string;
} & PropsWithChildren;
export const Container = ({ children, background, height }: ContainerProps) => {
  return (
    <div className={`${background} w-screen ${height} `}>
      <div className=" w-full h-fit m-auto lg:max-w-[1200px] ">{children}</div>
    </div>
  );
};
