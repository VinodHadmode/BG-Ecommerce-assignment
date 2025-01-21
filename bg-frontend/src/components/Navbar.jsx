import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from '../context/CartContextProvider';

const Navbar = () => {
  const { cart, setAddProductModal } = useContext(CartContext);

  const handleCartClick = () => {
    setAddProductModal(true);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
      <div className="container px-3"> 
        <Link to={"/"} className='navbar-brand'>
          SHOPI
        </Link>

        {/* Navbar toggle button for mobile responsiveness */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className='collapse navbar-collapse' id="navbarNav">
          <div className='navbar-nav ms-auto'>
            <Link to={"/"} className='nav-link'>All</Link>
            <Link to={"/clothes"} className='nav-link'>Clothes</Link>
            <Link to={"/electronics"} className='nav-link'>Electronics</Link>
            <Link to={"/furniture"} className='nav-link'>Furniture</Link>
            <Link to={"/toys"} className='nav-link'>Toys</Link>
          </div>

          <div className='navbar-nav ms-auto'>
            <span className='nav-link'>Username</span> 
            <Link to={"/my-orders"} className='nav-link'>My Orders</Link>
            <Link to={"/my-account"} className='nav-link'>My Account</Link>

            {/* Cart icon with item count */}
            <span
              className="nav-link cart-icon"
              onClick={handleCartClick}
            >
              <FaShoppingCart size={24} style={{cursor:"pointer"}} />
            </span>
            <span>
              <h6>{cart.length}</h6>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
