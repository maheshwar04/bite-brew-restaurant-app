import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import "../styles.css";

const ProductsNavbar = ({ isAdmin, isAuthenticated, cartItemCount }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/"); // Redirect to home page
  };

  const userName = localStorage.getItem("name");
  const userEmail = localStorage.getItem("email");

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <nav className="products-navbar">
      <div className="navbar-logo">🍴 Bites & Brew</div>
      <div className="navbar-links">
        {isAuthenticated() ? (
          <>
            {isAdmin() && <Link to="/admin">Admin Page</Link>}
            <Link to="/products">Home</Link>

            <Link to="/cart" className="cart-icon">
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

            <Link to="/orders">Orders</Link>
            <span className="profile-link" onClick={togglePopup}>
              <IoPersonCircleSharp size={40} />
            </span>

            <button className="btn btn-outline-danger" onClick={handleLogout}>
              Logout
            </button>

            {/* Profile Popup Box */}
            {showPopup && (
              <div className="profile-popup">
                <p>
                  <strong>Name:</strong> {userName}
                </p>
                <p>
                  <strong>Email:</strong> {userEmail}
                </p>
                <Link to="/settings">Settings</Link>
              </div>
            )}
          </>
        ) : (
          <>
            <Link to="/">Signup</Link>
            <Link to="/products">Menu</Link>
            <Link to="/">Login</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default ProductsNavbar;
