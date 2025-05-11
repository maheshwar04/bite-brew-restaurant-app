import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles.css";

function ProductDetailsPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [feedbacks, setFeedbacks] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:8081/api/products/${productId}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error("Error fetching product:", err));

      axios
        .get(`http://localhost:7004/feedback`, {
          params: { product_id: productId },
        })
        .then((res) => {
          const data = res.data;

          // Convert "2/5" → 2 for each rating
          const parsedFeedbacks = data.map((fb) => ({
            ...fb,
            numericRating: parseInt(fb.rating.split("/")[0], 10),
          }));

          setFeedbacks(parsedFeedbacks);

          if (parsedFeedbacks.length > 0) {
            const avg =
              parsedFeedbacks.reduce((sum, fb) => sum + fb.numericRating, 0) /
              parsedFeedbacks.length;
            setAverageRating(avg.toFixed(1));
          }
        })
        .catch((err) => console.error("Error fetching feedbacks:", err));
    }
  }, [productId]);

  const renderStars = (rating) => {
    return (
      <span className="stars">
        {"★".repeat(rating)}
        {"☆".repeat(5 - rating)}
      </span>
    );
  };

  return (
    <div className="product-details">
      {product && (
        <div className="product-info">
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p className="price">Price: ₹{product.price}</p>
          <p>{product.description}</p>
          {feedbacks.length > 0 && (
            <div className="avg-rating">
              <strong>Average Rating:</strong>{" "}
              {renderStars(Math.round(averageRating))} ({averageRating})
            </div>
          )}
        </div>
      )}
      <div className="customer-feedback">
        <h3>Customer Feedback</h3>
        {feedbacks.length === 0 ? (
          <p>No feedback yet.</p>
        ) : (
          feedbacks.map((fb, index) => (
            <div key={index} className="feedback-card">
              <div className="name-rating">
                <p>
                  <strong>Name:</strong> {fb.customer_name}
                </p>
                <p>{renderStars(fb.numericRating)}</p>
              </div>
              <div>
                <p>{fb.comments}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
