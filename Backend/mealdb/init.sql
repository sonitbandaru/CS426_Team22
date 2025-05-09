CREATE TABLE IF NOT EXISTS mealdb (
    id SERIAL PRIMARY KEY,
    image TEXT,
    mealName TEXT NOT NULL,
    donor TEXT NOT NULL,
    foodGroup TEXT NOT NULL,
    diet TEXT,
    allergies TEXT,
    typeOfCuisine TEXT,
    serves INTEGER
);