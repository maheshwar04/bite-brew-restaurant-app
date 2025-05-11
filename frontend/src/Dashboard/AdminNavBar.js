import { useNavigate, Link } from "react-router-dom";

const AdminNavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      {/* 🌐 Navbar */}
      <nav className="products-navbar">
        <a className="navbar-brand fw-bold fs-4" href="#">
          🍴 Bites & Brew Admin
        </a>
        <div className="d-flex gap-3">
          <Link to="/admin" className="btn btn-outline-light">
            Home
          </Link>
          <Link to="/products" className="btn btn-outline-light">
            Products
          </Link>
          <Link to="/admin/users" className="btn btn-outline-light">
            Users
          </Link>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};
export default AdminNavBar;
