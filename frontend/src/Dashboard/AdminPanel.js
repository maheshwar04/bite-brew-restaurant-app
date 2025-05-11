import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    category: "",
    imageUrl: "",
    stockQuantity: "",
    isAvailable: true,
    productType: "VEG",
  });
  const [productId, setproductId] = useState(null);
  const [errors, setErrors] = useState({});

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:8081/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const validateForm = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.description.trim()) errs.description = "Description is required";
    if (!form.price || isNaN(form.price)) errs.price = "Valid price required";
    if (!form.brand.trim()) errs.brand = "Brand is required";
    if (!form.category.trim()) errs.category = "Category is required";
    if (!form.imageUrl.trim()) errs.imageUrl = "Image URL required";
    if (!form.stockQuantity || isNaN(form.stockQuantity))
      errs.stockQuantity = "Valid stock required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      ...form,
      price: parseFloat(form.price),
      stockQuantity: parseInt(form.stockQuantity),
    };
    console.log(payload);

    try {
      if (productId) {
        await axios.put(
          `http://localhost:8081/api/products/${productId}`,
          payload
        );
      } else {
        await axios.post("http://localhost:8081/api/products", payload);
      }
      setForm({
        name: "",
        description: "",
        price: "",
        brand: "",
        category: "",
        imageUrl: "",
        stockQuantity: "",
        isAvailable: true,
        productType: "VEG",
      });
      setproductId(null);
      setErrors({});
      fetchProducts();
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleEdit = (product) => {
    setForm({ ...product });
    setproductId(product.productId);
    setErrors({});
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      await axios.delete(`http://localhost:8081/api/products/${id}`);
      fetchProducts();
    }
  };

  return (
    <div>
      {/* 🌐 Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2 d-flex justify-content-between align-items-center">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🍴 Bite & Brew Admin
        </a>
        <div className="d-flex gap-3">
          <Link to="/products" className="btn btn-outline-light">
            Products
          </Link>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        <div
          className="card p-4 shadow-lg rounded"
          style={{ backgroundColor: "#f6f7fa" }}
        >
          <h3 className="mb-4 text-center text-primary">
            {productId ? "Update Product" : "Add Product"}
          </h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Brand</label>
              <input
                type="text"
                className={`form-control ${errors.brand ? "is-invalid" : ""}`}
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
              />
              {errors.brand && (
                <div className="invalid-feedback">{errors.brand}</div>
              )}
            </div>

            <div className="col-md-12">
              <label className="form-label fw-bold">Description</label>
              <textarea
                className={`form-control ${
                  errors.description ? "is-invalid" : ""
                }`}
                rows={2}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />
              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">Price</label>
              <input
                type="number"
                className={`form-control ${errors.price ? "is-invalid" : ""}`}
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
              {errors.price && (
                <div className="invalid-feedback">{errors.price}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">Category</label>
              <input
                type="text"
                className={`form-control ${
                  errors.category ? "is-invalid" : ""
                }`}
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              {errors.category && (
                <div className="invalid-feedback">{errors.category}</div>
              )}
            </div>

            <div className="col-md-4">
              <label className="form-label fw-bold">Type</label>
              <select
                className="form-select"
                value={form.productType || "VEG"} // Binding to state
                onChange={(e) =>
                  setForm({ ...form, productType: e.target.value })
                }
              >
                <option value="VEG">VEG</option>
                <option value="NON_VEG">NON_VEG</option>
                <option value="EGG">EGG</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Image URL</label>
              <input
                type="text"
                className={`form-control ${
                  errors.imageUrl ? "is-invalid" : ""
                }`}
                value={form.imageUrl}
                onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
              />
              {errors.imageUrl && (
                <div className="invalid-feedback">{errors.imageUrl}</div>
              )}
            </div>

            <div className="col-md-6 d-flex flex-column align-items-start">
              <label className="form-label fw-bold">Image Preview</label>
              {form.imageUrl && (
                <img
                  src={form.imageUrl}
                  alt="Preview"
                  className="img-thumbnail shadow"
                  width="150"
                />
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Stock Quantity</label>
              <input
                type="number"
                className={`form-control ${
                  errors.stockQuantity ? "is-invalid" : ""
                }`}
                value={form.stockQuantity}
                onChange={(e) =>
                  setForm({ ...form, stockQuantity: e.target.value })
                }
              />
              {errors.stockQuantity && (
                <div className="invalid-feedback">{errors.stockQuantity}</div>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label fw-bold">Available</label>
              <select
                className="form-select"
                value={form.isAvailable}
                onChange={(e) =>
                  setForm({ ...form, isAvailable: e.target.value === "true" })
                }
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                {productId ? "Update" : "Add"} Product
              </button>
              {productId && (
                <button
                  type="button"
                  className="btn btn-secondary ms-2"
                  onClick={() => {
                    setproductId(null);
                    setForm({
                      name: "",
                      description: "",
                      price: "",
                      brand: "",
                      category: "",
                      imageUrl: "",
                      stockQuantity: "",
                      isAvailable: true,
                      productType: "VEG",
                    });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        {/* 📦 Product Table */}
        <hr />
        <h4>All Products</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Type</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.productId}>
                  <td>
                    <img src={p.imageUrl} alt={p.name} width="60" />
                  </td>
                  <td>{p.name}</td>
                  <td>{p.brand}</td>
                  <td>{p.type}</td>
                  <td>₹{p.price}</td>
                  <td>{p.stockQuantity}</td>
                  <td>{p.isAvailable ? "Yes" : "No"}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(p)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(p.productId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center">
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
