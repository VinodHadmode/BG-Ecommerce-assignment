import React, { useEffect, useState } from "react";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";

const base_url = "https://api.escuelajs.co/api/v1/products";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}`);
      //filtering based on clothes category
      const clothesProduct = res.data.filter(
        (product) => product.category.name === "Clothes"
      );
      setProducts(clothesProduct);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch products. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div class="d-flex justify-content-center m-5">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="alert alert-danger text-center my-5">{error}</div>;
  }

  return (
    <div>
      <div>
            <div className="container my-5">
              <div className="row">
                {products &&
                  products.map((product) => {
                    return (
                      <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card h-100">
                          <img
                            src={product.images[0]}
                            className="card-img-top"
                            style={{ height: "200px", objectFit: "cover" }}
                            alt={product.title}
                          />
                          <span
                            className="badge bg-secondary text-light position-absolute bottom-2 start-0 m-2"
                            style={{
                              backgroundColor: "rgba(0, 0, 0, 0.6)",
                              fontSize: "0.7rem",
                            }}
                          >
                            {product.category.name}
                          </span>
      
                          {/* Add to Cart Button */}
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
                          >
                            <CiCirclePlus size={30} />
                          </button>
      
                          {/* Card Body */}
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                              <p className="card-title m-0">{product.title}</p>
                              <p className="card-text fw-bold m-0">
                                ${product.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
    </div>
  );
};

export default Clothes;
