import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowAllUsers from "./components/ShowAllUsers";
import ProductsPage from "./components/ProductsPage";
import Navigation from "./components/Navigation";
import ProductsNavbar from "./components/ProductsNavbar";
import "./styles.css";
import CartPage from "./components/CartPage";
import Orders from "./components/Orders";
import ProductDetailsPage from "./components/ProductDetailsPage";
import AdminPanel from "./Dashboard/AdminPanel";
import AdminNavBar from "./Dashboard/AdminNavBar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);
  const isAuthenticated = () => {
    const authToken = localStorage.getItem("token");
    return authToken !== null && authToken !== "";
  };

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      default:
        return <Login />;
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="homepage-container">
              <Navigation setActiveComponent={setActiveComponent} />
              <div className="content-container">{renderComponent()}</div>
            </div>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/products"
          element={
            <>
              <ProductsNavbar
                isAuthenticated={isAuthenticated}
                cartItemCount={cart.length}
              />
              <ProductsPage handleAddToCart={handleAddToCart} />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <ProductsNavbar
                isAuthenticated={isAuthenticated}
                cartItemCount={cart.length}
              />
              <CartPage cart={cart} setCart={setCart} />{" "}
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <ProductsNavbar
                isAuthenticated={isAuthenticated}
                cartItemCount={cart.length}
              />
              <CartPage cart={cart} setCart={setCart} />{" "}
            </>
          }
        />
        <Route
          path="/orders"
          element={
            isAuthenticated() ? (
              <>
                <ProductsNavbar
                  isAuthenticated={isAuthenticated}
                  cartItemCount={cart.length}
                />
                <Orders />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin"
          element={
            isAuthenticated() &&
            localStorage.getItem("name") === "Maheshwar Nag" ? (
              <>
                <AdminNavBar />
                <AdminPanel />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        <Route
          path="/admin/users"
          element={
            isAuthenticated() &&
            localStorage.getItem("name") === "Maheshwar Nag" ? (
              <>
                <AdminNavBar />
                <ShowAllUsers />
              </>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/products/:productId"
          element={
            <>
              <ProductsNavbar
                isAuthenticated={isAuthenticated}
                cartItemCount={cart.length}
              />
              <ProductDetailsPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
