import Image from "next/image";

type productCardType = {
  src: string;
  title: string;
  price: number;
  customHeigh?: string;
};

export const ProductCard = ({
  src,
  title,
  price,
  customHeigh,
}: productCardType) => {
  return (
    <div className="">
      <div className={`bg-pink-800 relative ${customHeigh}`}>
        <Image
          src={src}
          alt="Picture"
          // width={400}
          // height={300}
          fill
          className={`object-cover rounded-2xl`}
        ></Image>
      </div>
      <div className="">
        <p className="text-base font-light text-green-500 ">{title}</p>
        <p className="text-base font-bold text-black">{price}$</p>
      </div>
    </div>
  );
};
