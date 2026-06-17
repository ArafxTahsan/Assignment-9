import { Menu, Sprout, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

const plantLink = { pathname: "/", hash: "#plants" };

export default function Navbar() {
  const { user, logoutUser, setToast } = useAuth();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setToast({ type: "success", message: "Logged out successfully." });
    } catch (error) {
      setToast({ type: "error", message: error.message });
    }
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <Sprout size={26} />
        <span>GreenNest</span>
      </Link>

      <nav className={`nav-links ${open ? "show" : ""}`}>
        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <Link
          to={plantLink}
          className={location.hash === "#plants" ? "active" : ""}
          onClick={() => setOpen(false)}
        >
          Plants
        </Link>
        <NavLink to="/profile" onClick={() => setOpen(false)}>My Profile</NavLink>
      </nav>

      <div className="nav-actions">
        {user ? (
          <div className="profile-menu">
            <button className="avatar-button" onClick={() => setMenuOpen(!menuOpen)}>
              <img
                src={user.photoURL || "https://i.ibb.co/5xYvV6N/default-avatar.png"}
                alt={user.displayName || "User"}
              />
            </button>
            {menuOpen && (
              <div className="dropdown">
                <strong>{user.displayName || "Plant Friend"}</strong>
                <span>{user.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link className="ghost-link" to="/login">Login</Link>
            <Link className="nav-cta" to="/register">Register</Link>
          </>
        )}
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
