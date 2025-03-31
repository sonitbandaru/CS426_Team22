import {Link} from "react-router-dom";

const Navbar=() =>{
  return(
    <nav style={{ width: "100vw", padding: "1rem", backgroundColor: "#87201d", color: "white", display: "flex", gap: "20px" }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/pickup-scheduler" style={{color: "white"}}>Pickup Scheduler</Link>
      <Link to="/donation-form" style={{ color: "white" }}>Donation Form</Link>
      <Link to="/meal-search" style={{color: "white" }}>Meal Search</Link>
      <Link to="/shopping-cart" style={{color: "white" }}>Shopping Cart</Link>
      <Link to="/account-home" style={{color: "white" }}>Account Home</Link>
    </nav>
  );
};

export default Navbar;
