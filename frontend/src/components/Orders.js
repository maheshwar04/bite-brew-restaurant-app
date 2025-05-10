import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState({});

  const userId = localStorage.getItem("userId"); // assuming it's stored on login

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/orders/history",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setOrders(res.data.data);
      } catch (err) {
        setError("Failed to load orders.");
      }
    };
    fetchOrders();
  }, []);

  const handleFeedbackChange = (productId, field, value) => {
    setFeedback((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], [field]: value },
    }));
  };

  const submitFeedback = async (productId) => {
    const ratingRaw = feedback[productId]?.rating;
    const rating = ratingRaw ? parseInt(ratingRaw) : 0; // Convert rating to integer

    const payload = {
      customer_id: userId,
      product_id: productId,
      rating,
      comments: feedback[productId]?.comments || "",
    };

    console.log("Submitting Feedback Payload:", payload);

    try {
      await axios.post("http://localhost:7004/feedback", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Feedback submitted!");
      setFeedback((prev) => ({ ...prev, [productId]: {} }));
    } catch (error) {
      console.error("Feedback submission failed", error);
      alert("Failed to submit feedback.");
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">My Orders</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {orders.length === 0 && !error ? (
        <p className="text-center">You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div key={order.orderId} className="card mb-4 order-card shadow">
            <div className="card-header bg-dark text-white">
              <strong>Order ID:</strong> {order.orderId}
              <span className="float-end">
                {new Date(order.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="card-body">
              <div className="row">
                {order.products.map((product, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">
                          ₹{product.price} × {product.quantity}
                        </p>

                        {/* Feedback Form */}
                        <div className="feedback-form mt-3">
                          <select
                            value={feedback[product._id]?.rating || ""}
                            onChange={(e) =>
                              handleFeedbackChange(
                                product._id,
                                "rating",
                                e.target.value
                              )
                            }
                            className="form-select"
                          >
                            <option value="">Rate this item</option>
                            {[1, 2, 3, 4, 5].map((rate) => (
                              <option key={rate} value={rate}>
                                {rate} Star{rate > 1 && "s"}
                              </option>
                            ))}
                          </select>
                          <textarea
                            rows="2"
                            className="form-control"
                            placeholder="Write a comment..."
                            value={feedback[product._id]?.comments || ""}
                            onChange={(e) =>
                              handleFeedbackChange(
                                product._id,
                                "comments",
                                e.target.value
                              )
                            }
                          ></textarea>
                          <button
                            className="btn btn-primary"
                            onClick={() => submitFeedback(product._id)}
                          >
                            Submit Feedback
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h5 className="mt-3 text-end">Total: ₹{order.total}</h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
