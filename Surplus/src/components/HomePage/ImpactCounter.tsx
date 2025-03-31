import React, { useEffect, useState } from "react";

const ImpactCounter = () => {
  const [people, setPeople] = useState(0);
  const [food, setFood] = useState(0);
//creates a cool animation to count up the number of people served and food saved
  useEffect(() => {
    const peopleTarget = 6243;
    const foodTarget = 13219;
    //set initial values for the counters
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
    <div style={{padding: "20px", backgroundColor: "#f4f4f4"}}>
      <h2>Our Impact</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
          width: "120px",
        }}>
          <h3>{people}</h3>
          <p>People Served</p>
        </div>
        <div style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "10px",
          width: "120px",
        }}>
          <h3>{food} lbs</h3>
          <p>Food Saved</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCounter;
