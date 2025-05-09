// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ShowAllUsers from './components/ShowAllUsers';
import ProductsPage from './components/ProductsPage';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="homepage-container">
      <h1 className="title">BITES & BREW</h1>
        <nav className="navigation">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<ShowAllUsers />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
