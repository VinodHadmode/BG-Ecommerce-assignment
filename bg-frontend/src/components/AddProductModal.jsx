import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContextProvider";

const AddProductModal = ({ show, handleClose }) => {
  const { cart, addToCart, removeCartItem } = useContext(CartContext);

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {cart.length === 0 ? (
          <h5 className="text-center">Your cart is empty!</h5>
        ) : (
          <div className="container">
            {cart.map((item) => (
              <div className="row align-items-center mb-3" key={item.id}>
                <div className="col-md-2">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "50px",
                      objectFit: "contain",
                      border: "1px solid #ccc",
                      padding: "2px",
                    }}
                  />
                </div>
                <div className="col-md-5">
                  <h6 className="m-0">{item.title}</h6>
                  <p className="m-0 text-muted">${item.price}</p>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                      item.quantity > 1
                        ? addToCart({ ...item, quantity: -1 })
                        : removeCartItem(item.id)
                    }
                  >
                    -
                  </button>
                </div>
                <div className="col-md-2 text-end">
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => removeCartItem(item.id)}
                  >
                    &times;
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            alert("Proceeding to checkout...");
            handleClose();
          }}
        >
          Checkout
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
