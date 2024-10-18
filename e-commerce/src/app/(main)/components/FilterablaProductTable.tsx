"use client";
import { useState } from "react";

type PropsList = {
  productsList: ListProductsType[];
  searchQuery: string;
  updateSearchQuery: (event: React.ChangeEvent<HTMLInputElement>) => void; // Нэмэгдүүлж байна
};

function ProductCategoryRow({ categoryRow }: { categoryRow: string }) {
  return (
    <tr>
      <th colSpan={2}>{categoryRow}</th>
    </tr>
  );
}

function ProductRow({ productOne }: { productOne: ListProductsType }) {
  const name = productOne.stocked ? (
    productOne.name
  ) : (
    <span style={{ color: "brown" }}>{productOne.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{productOne.price}</td>
    </tr>
  );
}

function ProductTable(props: PropsList) {
  //   const rows = [];
  //   let lastCategory = null;
  const rows: JSX.Element[] = []; // rows массивын төрөл тодорхойлох
  let lastCategory: string | null = null; // lastCategory-ийн төрөл тодорхойлох

  props.productsList.forEach((productOne) => {
    if (productOne.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          categoryRow={productOne.category}
          key={productOne.category}
        />
      );
    }
    // if (!productOne.name.includes(props.searchQuery)) return;
    // rows.push(<ProductRow productOne={productOne} key={productOne.name} />);
    // lastCategory = productOne.category;
    if (
      !productOne.name
        .toLocaleLowerCase()
        .includes(props.searchQuery.toLocaleLowerCase())
    )
      return;
    rows.push(<ProductRow productOne={productOne} key={productOne.name} />);
    lastCategory = productOne.category;
  });

  return (
    <table className=" bg-slate-300">
      <thead>
        <tr className="bg-yellow-200 flex justify-between">
          <th className="bg-yellow-600">Name</th>
          <th className="bg-red-200">Price</th>
        </tr>
      </thead>
      <tbody className="bg-gray-500">{rows}</tbody>
    </table>
  );
}

function SearchBar(props: PropsList) {
  return (
    <form className="bg-blue-200 flex justify-center mt-4">
      <input
        onChange={props.updateSearchQuery}
        value={props.searchQuery}
        type="text"
        placeholder="Search..."
      />
      <label>
        <input type="checkbox" /> Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable(props: { productsList: ListProductsType[] }) {
  const [searchQuery, setSearchQuery] = useState<string>(""); // searchQuery-ийг string төрөлд зааж өгнө

  const updateSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value); // event.target.value-ийг авах
  };

  return (
    <div className="container border rounded-xl flex justify-center flex-col bg-red-200 m-auto">
      <SearchBar
        searchQuery={searchQuery} // string төрөл дамжуулж байна
        updateSearchQuery={updateSearchQuery} // функц дамжуулж байна
        productsList={props.productsList}
      />
      <ProductTable
        searchQuery={searchQuery} // string төрөл дамжуулж байна
        productsList={props.productsList}
        updateSearchQuery={updateSearchQuery} // Функц
      />
    </div>
  );
}

const LISTPRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export type ListProductsType = {
  category: string;
  price: string;
  stocked?: boolean;
  name: string;
};
export default function App() {
  return <FilterableProductTable productsList={LISTPRODUCTS} />;
}

// <tr> (Table Row)
//<th> (Table Header)
//<td> (Table Data)
// <thead> Тайлбар: Хүснэгтийн толгой хэсгийг (header) тодорхойлох элемент.
// <tbody> Тайлбар: Хүснэгтийн үндсэн агуулгыг (data) тодорхойлох элемент. Энд tr болон td элементүүдийг агуулдаг. Хүснэгтэнд багануудаас үүссэн мэдээллийг хадгална.
// Одоо mockup дизайн дээрх компонентүүдийг шаталсан бүтцээр харуулцгаая. Компонент доторх компонент нь доорх догол мөрөнд харагдана.

// -FilterableProductTable
// --SearchBar
// --ProductTable
// ---ProductCategoryRow
// ---ProductRow
