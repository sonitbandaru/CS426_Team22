import React from "react";
import "../styles/HomePage/HomePage.css"; 
import heroImage from "../assets/hero.png"; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <section className="hero">
        <img src={heroImage} alt="Surplus+ Hero" className="hero-image" />
      </section>
    </div>
  );
};

export default HomePage;
