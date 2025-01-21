import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";

const MyOrders = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders yet!</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div key={order.id} className="order">
              <h5>Order Date: {order.date}</h5>
              <h6>Total: ${order.totalPrice.toFixed(2)}</h6>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.title} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
