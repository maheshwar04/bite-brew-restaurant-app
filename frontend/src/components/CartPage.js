import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function CartPage({ cart, setCart }) {
  const [isCODChecked, setIsCODChecked] = useState(true);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  console.log(cart);
  const handleQuantityChange = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(
      1,
      (updatedCart[index].quantity || 1) + delta
    );
    setCart(updatedCart);
  };

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const getTotal = () =>
    cart
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);

  const handleCODChange = () => {
    setIsCODChecked(!isCODChecked);
  };

  const handleCheckout = async () => {
    if (!address.trim()) {
      alert("Please enter a delivery address.");
      return;
    }

    if (!isCODChecked) {
      alert("You must select Cash on Delivery to proceed.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to place the order.");
        navigate("/login");
        return;
      }

      // Map the cart data to match the backend structure
      const orderProducts = cart.map((item) => ({
        productId: item.productId,
        quantity: item.quantity || 1,
      }));
      const response = await axios.post(
        "http://localhost:5000/api/orders/create",
        {
          products: orderProducts, // Send mapped products to backend
          total: parseFloat(getTotal()),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "✅ Order placed successfully! 🚚 Your delicious food will arrive in 25 minutes. Get ready to indulge! 🍽️"
      );
      setCart([]); // Clear the cart
      navigate("/products"); // Redirect to products page after successful order
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("❌ Failed to place order.");
    }
  };
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => handleQuantityChange(index, -1)}>
                    -
                  </button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => handleQuantityChange(index, 1)}>
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <textarea
            rows="4"
            placeholder="Enter your full address here"
            className="address-input"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          {/* 💰 Checkout Section */}
          <div className="cart-total">
            <h3>Total: ₹{getTotal()}</h3>
            <label style={{ marginTop: "10px", display: "block" }}>
              <input
                type="checkbox"
                checked={isCODChecked}
                onChange={handleCODChange}
              />{" "}
              Cash on Delivery (COD)
            </label>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
