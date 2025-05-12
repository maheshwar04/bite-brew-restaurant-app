// Register.js
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      console.log("User registered:", response);
      setMessage("Registered! Redirecting...");
      await wait(2000);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      window.location.reload();
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Registration faild try again.");
    }
  };

  return (
    <div className="box-container">
      <h2>Register</h2>
      {message && <div className="alert alert-info mt-3">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          className="input-form "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Full Name"
        />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
