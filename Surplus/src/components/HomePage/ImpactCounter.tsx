import React, { useEffect, useState } from "react";

const ImpactCounter = () => {
  const [peopleServed, setPeopleServed] = useState(0);
  const [foodSaved, setFoodSaved] = useState(0);

  // Simple animation effect
  useEffect(() => {
    const serveTarget = 1243;
    const foodTarget = 3219;

    const serveInterval = setInterval(() => {
      setPeopleServed(prev => {
        if (prev < serveTarget) return prev + 11;
        clearInterval(serveInterval);
        return serveTarget;
      });
    }, 10);

    const foodInterval = setInterval(() => {
      setFoodSaved(prev => {
        if (prev < foodTarget) return prev + 17;
        clearInterval(foodInterval);
        return foodTarget;
      });
    }, 10);

    return () => {
      clearInterval(serveInterval);
      clearInterval(foodInterval);
    };
  }, []);

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Our Impact</h2>
      <div style={styles.widgetRow}>
        <div style={styles.widgetCard}>
          <span style={styles.icon}>🧍‍♂️</span>
          <h3 style={styles.number}>{peopleServed}</h3>
          <p>People Served</p>
        </div>
        <div style={styles.widgetCard}>
          <span style={styles.icon}>🗑️</span>
          <h3 style={styles.number}>{foodSaved.toLocaleString()} lbs</h3>
          <p>Food Saved</p>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: "2rem",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#87201d",
    marginBottom: "1.5rem",
  },
  widgetRow: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    flexWrap: "wrap",
  },
  widgetCard: {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1.5rem",
    width: "180px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "2rem",
  },
  number: {
    fontSize: "2rem",
    margin: "0.5rem 0",
    fontWeight: "bold",
    color: "#333",
  },
};

export default ImpactCounter;
