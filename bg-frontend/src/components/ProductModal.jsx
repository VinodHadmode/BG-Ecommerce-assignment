import React from "react";
import { Modal, Button } from "react-bootstrap";

const ProductModal = ({ show, handleClose, product }) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Product Details :</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="row">
          <div className="col-md-6">
            <img
              src={product?.images[0]}
              alt={product?.title}
              className="img-fluid"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-6">
            <h3 className="font-weight-bold" style={{ marginBottom: "15px" }}>
              ${product?.price}
            </h3>
            <h4 className="font-weight-bold">{product?.title}</h4>
            <p className="mt-3">{product?.description}</p>{" "}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
