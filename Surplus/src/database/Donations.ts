export interface Meal {
    image: string;
    mealName: string;
    donor: string;
    donorRating: number;
    foodGroup: 'grain' | 'protein' | 'vegetable' | 'fruit' | 'dairy';
    diet: string;
    allergies: string;
    healthyScore: number;
    typeOfCuisine: string;
    serves: number;
}
  
export const meals: Meal[] = [
    {
      image: "https://images.unsplash.com/photo-1588236045040-b33bbec7c1c9",
      mealName: "Chicken Salad",
      donor: "John's Kitchen",
      donorRating: 4.5,
      foodGroup: "protein",
      diet: "Keto",
      allergies: "None",
      healthyScore: 5,
      typeOfCuisine: "American",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1611834304152-5379bdf0f415",
      mealName: "Vegetable Stir Fry",
      donor: "Sarah's Vegan Delights",
      donorRating: 4.8,
      foodGroup: "vegetable",
      diet: "Vegan",
      allergies: "Soy",
      healthyScore: 5,
      typeOfCuisine: "Chinese",
      serves: 6
    },
    {
      image: "https://images.unsplash.com/photo-1571849577593-2338b34268ac",
      mealName: "Grilled Salmon",
      donor: "Ocean's Bounty",
      donorRating: 4.9,
      foodGroup: "protein",
      diet: "Paleo",
      allergies: "None",
      healthyScore: 4,
      typeOfCuisine: "Mediterranean",
      serves: 2
    },
    {
      image: "https://images.unsplash.com/photo-1600585154355-9de59d45544b",
      mealName: "Quinoa Salad",
      donor: "Green Earth Foods",
      donorRating: 4.2,
      foodGroup: "grain",
      diet: "Gluten-Free",
      allergies: "None",
      healthyScore: 5,
      typeOfCuisine: "Mexican",
      serves: 3
    },
    {
      image: "https://images.unsplash.com/photo-1506807677341-d3f121a3a2a6",
      mealName: "Spaghetti Bolognese",
      donor: "Mama's Kitchen",
      donorRating: 4.7,
      foodGroup: "grain",
      diet: "Traditional",
      allergies: "Gluten",
      healthyScore: 3,
      typeOfCuisine: "Italian",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1580905957989-226d273af987",
      mealName: "Fruit Salad",
      donor: "Fresh & Fruity",
      donorRating: 5.0,
      foodGroup: "fruit",
      diet: "Raw",
      allergies: "None",
      healthyScore: 5,
      typeOfCuisine: "American",
      serves: 2
    },
    {
      image: "https://images.unsplash.com/photo-1560971772-bf76739d745b",
      mealName: "Tofu Stir Fry",
      donor: "Asian Veggies",
      donorRating: 4.0,
      foodGroup: "protein",
      diet: "Vegan",
      allergies: "None",
      healthyScore: 4,
      typeOfCuisine: "Chinese",
      serves: 5
    },
    {
      image: "https://images.unsplash.com/photo-1542736660-02a3e24c5f32",
      mealName: "Chicken Tacos",
      donor: "Taco Time",
      donorRating: 4.5,
      foodGroup: "protein",
      diet: "Low-Carb",
      allergies: "None",
      healthyScore: 4,
      typeOfCuisine: "Mexican",
      serves: 6
    },
    {
      image: "https://images.unsplash.com/photo-1561938951-e755032b27bc",
      mealName: "Vegetable Soup",
      donor: "Healthy Heart Meals",
      donorRating: 4.3,
      foodGroup: "vegetable",
      diet: "Vegetarian",
      allergies: "None",
      healthyScore: 5,
      typeOfCuisine: "American",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1563793570-d2d81f040324",
      mealName: "Greek Yogurt Parfait",
      donor: "Dairy Queen",
      donorRating: 4.6,
      foodGroup: "dairy",
      diet: "Low-Fat",
      allergies: "None",
      healthyScore: 4,
      typeOfCuisine: "Greek",
      serves: 2
    }
];