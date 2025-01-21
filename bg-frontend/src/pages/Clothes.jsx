import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import ProductModal from "../components/ProductModal";
import AddProductModal from "../components/AddProductModal";
import { CartContext } from "../context/CartContextProvider";

const base_url = "https://api.escuelajs.co/api/v1/products";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addProductModal, setAddProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}`);
      //filtering based on clothes category
      const clothesProducts = res.data.filter(
        (product) => product.category.name === "Clothes"
      );
      setProducts(clothesProducts);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch products. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleShowProductModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseProductModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleShowAddProductModal = (product, event) => {
    event.stopPropagation(); // Prevent triggering the product detail modal
    addToCart(product); // Add product to the cart
    setAddProductModal(true); // Open the cart modal
  };

  const handleCloseAddProductModal = () => {
    setAddProductModal(false);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center m-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center my-5">{error}</div>;
  }

  return (
    <div>
      <div className="container my-5">
        {products.length === 0 ? (
          <div className="text-center my-5">
            <h4>No products found !!</h4>
          </div>
        ) : (
          <div className="row">
            {products.map((product) => (
              <div
                className="col-md-4 mb-4"
                key={product.id}
                style={{ cursor: "pointer" }}
                onClick={() => handleShowProductModal(product)}
              >
                <div className="card h-100">
                  <img
                    src={product.images[0]}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    alt={product.title}
                  />
                  <button
                    className="position-absolute"
                    style={{
                      top: "10px",
                      right: "10px",
                      background: "none",
                      border: "none",
                      padding: "0",
                      cursor: "pointer",
                    }}
                    onClick={(event) => handleShowAddProductModal(product, event)}
                  >
                    <CiCirclePlus size={30} />
                  </button>
                  <div className="card-body">
                    <p className="card-title">{product.title}</p>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Detail Modal */}
        <ProductModal
          show={showModal}
          handleClose={handleCloseProductModal}
          product={selectedProduct}
        />

        {/* Add Product Modal */}
        <AddProductModal
          show={addProductModal}
          handleClose={handleCloseAddProductModal}
        />
      </div>
    </div>
  );
};

export default Clothes;
