import React from "react";
import "../styles/HomePage/HomePage.css";
import heroImage from "../assets/hero.png";
import ImpactCounter from "../components/HomePage/ImpactCounter";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero">
        <img src={heroImage} alt="Surplus+ Hero" className="hero-image" />
      </section>

      <ImpactCounter /> {}

      <section className="quick-access">
        <h2>Quick Access</h2>
        <div className="quick-buttons">
          <button>Search for Meals</button>
          <button>Donate Surplus</button>
          <button>Schedule a Pickup</button>
          <button>View Map</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
