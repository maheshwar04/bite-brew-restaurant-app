// ProductsPage.js
import React from 'react';
import products from './products'; // Assuming you have a products.js file

function ProductsPage() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
