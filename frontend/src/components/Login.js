// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );

      // Check if the login was successful, typically by checking response status or data
      if (response.status === 200 && response.data) {
        console.log("User logged in:", response);
        // Redirect to products page on successful login
        navigate("/products");
      } else {
        console.error("Login failed:", response);
      }
      console.log("User logged in:", response);
      localStorage.setItem("userId", response.data.userId);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("token", response.data.token);
      navigate("/products");
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  return (
    <div className="box-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="input-form "
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
        />
        <input
          className="input-form "
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
