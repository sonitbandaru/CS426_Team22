import {Link} from "react-router-dom";

const Navbar=() =>{
  return(
    <nav style={{ 
    width: "100%", 
    height: "30px", 
    padding: "1rem", 
    backgroundColor: "#87201d", 
    color: "white", 
    display: "flex", 
    gap: "20px", 
    alignContent: "center", 
    justifyContent: "center",
    flexWrap: "wrap",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/pickup-scheduler" style={{color: "white"}}>Pickup Scheduler</Link>
      <Link to="/donation-form" style={{ color: "white" }}>Donation Form</Link>
      <Link to="/meal-search" style={{color: "white" }}>Meal Search</Link>
      <Link to="/account-home" style={{color: "white" }}>Account Home</Link>
    </nav>
  );
};

export default Navbar;
