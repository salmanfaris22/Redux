// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">MyApp</div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="flex items-center space-x-1">
            <FaHome size={20} />
            <span>Home</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-1">
            <FaInfoCircle size={20} />
            <span>About</span>
          </Link>
          <Link to="/cart" className="flex items-center space-x-1">
            <FaShoppingCart size={20} />
            <span>Cart</span>
          </Link>
          <Link to="/signin" className="flex items-center space-x-1">
            <FaSignInAlt size={20} />
            <span>Sign In</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-xl">
            <FaShoppingCart size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
