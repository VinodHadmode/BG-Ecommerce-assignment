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
      <div className="container-fluid">

        <Link to={"/"} className='navbar-brand'>
          SHOPI
        </Link>

        <div className='navbar-nav mr-auto'>
          <Link to={"/"} className='nav-link'>All</Link>
          <Link to={"/clothes"} className='nav-link'>Clothes</Link>
          <Link to={"/electronics"} className='nav-link'>Electronics</Link>
          <Link to={"/furniture"} className='nav-link'>Furniture</Link>
          <Link to={"/toys"} className='nav-link'>Toys</Link>
        </div>

        <div className='navbar-nav ml-auto'>
          <span className='nav-link'>Username</span> 
          <Link to={"/my-orders"} className='nav-link'>My Orders</Link>
          <Link to={"/my-account"} className='nav-link'>My Account</Link>

          <span
            className="nav-link cart-icon"
            onClick={handleCartClick} // Trigger modal on click
          >
            <FaShoppingCart size={24} style={{cursor:"pointer"}}/>
          </span>
          <h6>{cart.length}</h6>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
