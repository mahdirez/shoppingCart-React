import React, { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
export default function UserProvider({ children }) {
  const [cart, setCart] = useState([]);
  function handleAppProduct(product) {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cart.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <UserContext.Provider value={{ cart, handleAppProduct ,handleRemoveProduct}}>
      {children}
    </UserContext.Provider>
  );
}
