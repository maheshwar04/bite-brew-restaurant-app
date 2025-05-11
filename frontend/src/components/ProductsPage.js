import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductsPage({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8081/api/products");
        setProducts(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.productId} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-image"
            />
            <h3>{product.name}</h3>
            <p>₹{product.price.toFixed(2)}</p>
            <div>
              {" "}
              <button
                className="info-btn"
                onClick={() => navigate(`/products/${product.productId}`)}
              >
                More Info
              </button>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => {
                handleAddToCart(product);
                alert(`${product.name} added to cart!`);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
