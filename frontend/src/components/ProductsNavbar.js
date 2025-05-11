import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../styles.css";

const ProductsNavbar = ({ isAuthenticated, cartItemCount }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="products-navbar">
      <div className="navbar-logo">Bites & Brew</div>
      <div className="navbar-links">
        {isAuthenticated() ? (
          <>
            <Link to="/products">Home</Link>

            <Link to="/cart" className="cart-icon">
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </Link>

            <Link to="/orders">Orders</Link>
            <Link to="/profile">Profile</Link>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/">Signup</Link>
            <Link to="/products">Menu</Link>
            <Link to="/">Login</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default ProductsNavbar;
