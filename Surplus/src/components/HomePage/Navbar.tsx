import {Link} from "react-router-dom";
import "../../styles/Navbar.css";
const Navbar=() =>{
  return(
    <nav className="navbar">
      <Link to="/" className="nav-link" style={{ color: "white" }}>Home</Link>
      <Link to="/pickup-scheduler" className="nav-link">Pickup Scheduler</Link>
      <Link to="/donation-form" className="nav-link">Donation Form</Link>
      <Link to="/meal-search" className="nav-link">Meal Search</Link>
      <Link to="/account-home" className="nav-link">Account Home</Link>
    </nav>
  );
};

export default Navbar;
