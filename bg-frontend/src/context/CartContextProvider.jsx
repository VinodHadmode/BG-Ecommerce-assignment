import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //add to cart
  const addToCart = () => {};

  //remove Item from cart
  const removeCartItem = () => {};

  //clearCart
  const clearCart = () => {};

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
