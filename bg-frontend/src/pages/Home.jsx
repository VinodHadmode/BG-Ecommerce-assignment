import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import ProductModal from "../components/ProductModal";
import AddProductModal from "../components/AddProductModal";
import { CartContext } from "../context/CartContextProvider";

const base_url = "https://api.escuelajs.co/api/v1/products";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { addToCart, addProductModal, setAddProductModal } = useContext(CartContext); // Use context here

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}`);
      setProducts(res.data);
      setFilteredProducts(res.data);
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

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  const handleShowProductModal = (product) => {
    setShowModal(true);
  };

  const handleCloseProductModal = () => {
    setShowModal(false);
  };

  const handleShowAddProductModal = (product, event) => {
    event.stopPropagation();
    addToCart(product);
    setAddProductModal(true); 
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
        {/* Search Input */}
        <div className="mb-5 d-flex justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Search a products"
            value={searchQuery}
            onChange={handleSearch}
            style={{ width: "40%", padding: "10px" }}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center my-5">
            <h4>No products found!</h4>
          </div>
        ) : (
          <div className="row">
            {filteredProducts.map((product) => (
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
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
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

export default Home;
