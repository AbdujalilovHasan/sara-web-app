import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          <i className="bi bi-house"></i>
          <span>Asosiy</span>
        </NavLink>
        <NavLink
          to="/add"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          <i className="bi bi-calendar2-plus"></i>
          <span>Qo`shish</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          <i className="bi bi-person"></i>
          <span>Profil</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;