import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light shadow-sm'>
      <div className="container-fluid">

        {/* Logo */}
        <Link to={"/"} className='navbar-brand'>
          SHOPI
        </Link>

        {/* Pages on the left side */}
        <div className='navbar-nav mr-auto'>
          <Link to={"/"} className='nav-link'>All</Link>
          <Link to={"/clothes"} className='nav-link'>Clothes</Link>
          <Link to={"/electronics"} className='nav-link'>Electronics</Link>
          <Link to={"/furniture"} className='nav-link'>Furniture</Link>
          <Link to={"/toys"} className='nav-link'>Toys</Link>
        </div>

        {/* Right side items (Reversed order) */}
        <div className='navbar-nav ml-auto'>
          <span className='nav-link'>Username</span> {/* Display username */}
          <Link to={"/my-orders"} className='nav-link'>My Orders</Link>
          <Link to={"/my-account"} className='nav-link'>My Account</Link>

          {/* Cart Icon */}
          <Link to={"/cart"} className='nav-link cart-icon'>
            <FaShoppingCart style={{ fontSize: "1.5rem", color: "#333" }} />
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
