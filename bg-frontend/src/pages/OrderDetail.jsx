import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import { useParams, Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";

const OrderDetail = () => {
  const { orderId } = useParams(); // Get the orderId from the URL
  const { orders } = useContext(CartContext);
  const order = orders.find((o) => o.id === parseInt(orderId));

  if (!order) {
    return <div>Order not found!</div>;
  }

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center align-items-center mb-4">
        <Link
          to="/my-orders"
          className="text-decoration-none d-flex align-items-center me-3"
        >
          <MdKeyboardArrowLeft size={40} className="me-1" style={{color:"black"}}/>
        </Link>
        <h3 className="mb-0">Order Details</h3>
      </div>

      <div className="row justify-content-center">
        {order.items.map((item) => (
          <div key={item.id} className="col-12 mb-4 d-flex justify-content-center">
            <div className="card w-50">
              <div className="card-body d-flex">
                <div className="col-md-3 d-flex justify-content-center">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="img-fluid"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-9">
                  <p className="card-title">{item.title}</p>
                  <h5 className="card-title">$ {item.price}</h5>
                  <p className="card-text">{item.quantity}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
