import {Link} from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import "../../styles/Navbar.css";
const Navbar = () => {
  const { email } = useContext(UserContext); 

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link" style={{ color: "white" }}>Home</Link>
        <Link to="/pickup-scheduler" className="nav-link">Pickup Scheduler</Link>
        <Link to="/donation-form" className="nav-link">Donation Form</Link>
        <Link to="/meal-search" className="nav-link">Meal Search</Link>
        <Link to="/account-home" className="nav-link">Account Home</Link>
        {email ? (
          <span className="user-email">Logged in as: {email}</span>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
