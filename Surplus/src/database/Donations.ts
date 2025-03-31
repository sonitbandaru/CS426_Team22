export interface Meal {
    image: string;
    mealName: string;
    donor: string;
    foodGroup: string;
    diet: string;
    allergies: string;
    typeOfCuisine: string;
    serves: number;
}
  
export const meals: Meal[] = [
    {
      image: "https://images.unsplash.com/photo-1588236045040-b33bbec7c1c9",
      mealName: "Chicken Salad",
      donor: "John's Kitchen",
      foodGroup: "protein",
      diet: "Keto",
      allergies: "None",
      typeOfCuisine: "American",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1611834304152-5379bdf0f415",
      mealName: "Vegetable Stir Fry",
      donor: "Sarah's Vegan Delights",
      foodGroup: "vegetable",
      diet: "Vegan",
      allergies: "Soy",
      typeOfCuisine: "Chinese",
      serves: 6
    },
    {
      image: "https://images.unsplash.com/photo-1571849577593-2338b34268ac",
      mealName: "Grilled Salmon",
      donor: "Ocean's Bounty",
      foodGroup: "protein",
      diet: "Paleo",
      allergies: "None",
      typeOfCuisine: "Mediterranean",
      serves: 2
    },
    {
      image: "https://images.unsplash.com/photo-1600585154355-9de59d45544b",
      mealName: "Quinoa Salad",
      donor: "Green Earth Foods",
      foodGroup: "grain",
      diet: "Gluten-Free",
      allergies: "None",
      typeOfCuisine: "Mexican",
      serves: 3
    },
    {
      image: "https://images.unsplash.com/photo-1506807677341-d3f121a3a2a6",
      mealName: "Spaghetti Bolognese",
      donor: "Mama's Kitchen",
      foodGroup: "grain",
      diet: "Traditional",
      allergies: "Gluten",
      typeOfCuisine: "Italian",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1580905957989-226d273af987",
      mealName: "Fruit Salad",
      donor: "Fresh & Fruity",
      foodGroup: "fruit",
      diet: "Raw",
      allergies: "None",
      typeOfCuisine: "American",
      serves: 2
    },
    {
      image: "https://images.unsplash.com/photo-1560971772-bf76739d745b",
      mealName: "Tofu Stir Fry",
      donor: "Asian Veggies",
      foodGroup: "protein",
      diet: "Vegan",
      allergies: "None",
      typeOfCuisine: "Chinese",
      serves: 5
    },
    {
      image: "https://images.unsplash.com/photo-1542736660-02a3e24c5f32",
      mealName: "Chicken Tacos",
      donor: "Taco Time",
      foodGroup: "protein",
      diet: "Low-Carb",
      allergies: "None",
      typeOfCuisine: "Mexican",
      serves: 6
    },
    {
      image: "https://images.unsplash.com/photo-1561938951-e755032b27bc",
      mealName: "Vegetable Soup",
      donor: "Healthy Heart Meals",
      foodGroup: "vegetable",
      diet: "Vegetarian",
      allergies: "None",
      typeOfCuisine: "American",
      serves: 4
    },
    {
      image: "https://images.unsplash.com/photo-1563793570-d2d81f040324",
      mealName: "Greek Yogurt Parfait",
      donor: "Dairy Queen",
      foodGroup: "dairy",
      diet: "Low-Fat",
      allergies: "None",
      typeOfCuisine: "Greek",
      serves: 2
    }
];