import React, { useContext } from "react";
import products from "../../data";
import { UserContext } from "../context/UserContext";

export default function Card() {
  const { handleAddProduct } = useContext(UserContext);
  return (
    <div className="flex flex-wrap justify-around text-center text-xl gap-4 p-5">
      {products.map((item) => {
        return (
          <div className="p-5 flex flex-col gap-4 bg-slate-200" key={item.id}>
            <img src={item.image} className="w-80 h-56" />
            <p>{item.name}</p>
            <p>price:{item.price}$</p>
            <button
              onClick={() => handleAddProduct(item)}
              className="bg-yellow-300 rounded-full text-white"
            >
              Add To Cart
            </button>
          </div>
        
        );
      })}
    </div>
  );
}
