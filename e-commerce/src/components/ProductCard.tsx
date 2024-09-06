import Image from "next/image";

type productCardType = {
  src: string;
  title: string;
  price: number;
  customHeigh?: string;
};

export const ProductCard1 = ({
  src,
  title,
  price,
  customHeigh,
}: productCardType) => {
  return (
    <main>
      <div className="bg-yellow-400 ">
        <div className={`bg-pink-800 relative`}>
          <Image
            src={src}
            alt="Picture"
            width={400}
            height={300}
            // fill
            className={`object-cover rounded-xl`}
          ></Image>
        </div>
        <div>
          <p className="text-base font-light text-green-500 ">{title}</p>
          <p className="text-base font-bold text-black">{price}$</p>
        </div>
      </div>
    </main>
  );
};
