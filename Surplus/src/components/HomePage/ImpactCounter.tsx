import React, { useEffect, useState } from "react";
import "../../styles/HomePage/ImpactCounter.css"; 

const ImpactCounter = () => {
  const [people, setPeople] = useState(0);
  const [food, setFood] = useState(0);

  useEffect(() => {
    const peopleTarget = 6243;
    const foodTarget = 13219;

    const peopleInterval = setInterval(() => {
      setPeople((prev) => {
        if (prev < peopleTarget) return prev + 10;
        clearInterval(peopleInterval);
        return peopleTarget;
      });
    }, 10);

    const foodInterval = setInterval(() => {
      setFood((prev) => {
        if (prev < foodTarget) return prev + 15;
        clearInterval(foodInterval);
        return foodTarget;
      });
    }, 10);

    return () => {
      clearInterval(peopleInterval);
      clearInterval(foodInterval);
    };
  }, []);

  return (
    <div className="impact-container">
      <h2>Our Impact</h2>
      <div className="impact-boxes">
        <div className="impact-card">
          <h3>{people}</h3>
          <p>People Served</p>
        </div>
        <div className="impact-card">
          <h3>{food} lbs</h3>
          <p>Food Saved</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCounter;
