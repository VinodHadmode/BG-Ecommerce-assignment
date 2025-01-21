import React, { createContext, useState } from "react";

// Create a context for cart
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  

  // Function to add item to the cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  // Function to remove item from the cart
  const removeCartItem = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Function to decrease the quantity of an item
  const decreaseQuantity = (itemId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === itemId
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
              }
            : item
        )
        .filter((item) => item.quantity > 0); // Removes item if quantity becomes 0
    });
  };

  // Function to place an order
  const placeOrder = () => {
    const newOrder = {
      id: new Date().getTime(),
      items: cart,
      totalPrice: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
      date: new Date().toLocaleDateString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart,decreaseQuantity, removeCartItem, placeOrder, orders }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
