import { Link } from "react-router-dom";
const Navigation = ({ setActiveComponent }) => {
  return (
    <>
      <h1 className="title">BITES & BREW</h1>
      <div className="navigation">
        <button onClick={() => setActiveComponent("login")}>Login</button>
        <button onClick={() => setActiveComponent("register")}>Register</button>
        <Link to="/products">
          <button>Explore</button>
        </Link>
      </div>
    </>
  );
};

export default Navigation;
