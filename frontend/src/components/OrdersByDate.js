import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const OrdersByDate = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrders = async () => {
    if (!selectedDate) return;
    setLoading(true);
    try {
      // Format selected date to YYYY-MM-DD
      const formattedDate = new Date(selectedDate).toISOString().split("T")[0];

      const response = await axios.get(
        "http://localhost:5000/api/orders/by-date",
        {
          params: { date: formattedDate },
        }
      );
      setOrders(response.data.data);
    } catch (err) {
      console.error("Error fetching orders", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Orders By Date</h2>
      <div className="input-group mb-4 justify-content-center">
        <input
          type="date"
          className="form-control w-auto"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <button className="btn btn-primary ms-2" onClick={fetchOrders}>
          Fetch Orders
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        orders.map((order) => (
          <div className="card mb-4 shadow-sm" key={order._id}>
            <div className="card-header bg-dark text-white">
              <strong>Order ID:</strong> {order._id} | <strong>Total:</strong> ₹
              {order.total} | <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </div>
            <div className="card-body">
              <div className="row">
                {order.products.map((product) => (
                  <div className="col-md-3 mb-3" key={product._id}>
                    <div className="card h-100">
                      <img
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                      <div className="card-body p-2">
                        <h6 className="card-title mb-1">{product.name}</h6>
                        <p className="card-text mb-0">
                          Qty: {product.quantity}
                        </p>
                        <p className="card-text text-success">
                          ₹{product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersByDate;
