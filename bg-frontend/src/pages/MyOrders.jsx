import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaBox } from "react-icons/fa"; // Import icons for date and number of items

const MyOrders = () => {
  const { orders } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">My Orders</h2>
      {orders.length === 0 ? (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "60vh" }}>
          <h3 className="text-muted mb-3">You have no orders yet!</h3>
         
          <Link to="/" className="btn btn-secondary px-4 py-2">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="row justify-content-center">
          {orders.map((order) => (
            <div key={order.id} className="col-12 mb-4 d-flex justify-content-center">
              <Link to={`/my-orders/${order.id}`} className="text-decoration-none">
                <div className="card p-3 shadow-sm" style={{ width: "18rem" }}>
                  <div className="card-body d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <FaCalendarAlt className="me-2" />
                        <span>{order.date}</span>
                      </div>
                      <div className="d-flex align-items-center">
                        <FaBox className="me-2" />
                        <span>{order.items.length} items</span>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-end">
                      <span className="fs-4 fw-bold">${order.totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
