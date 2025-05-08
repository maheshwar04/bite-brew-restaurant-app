// Register.js
import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/users/register", formData);
      console.log("User registered:", response);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email Address" />
        <input type="password" name="password" value={formData.password} onChange={handleChange} required placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
