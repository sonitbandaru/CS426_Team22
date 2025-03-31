const foodGroups: string[] = [
    'grain',
    'protein',
    'vegetable',
    'fruit',
    'dairy'
];

const diets: string[] = [
    'Keto',
    'Vegan',
    'Gluten-Free',
    'Vegetarian',
    'Paleo',
    'Raw',
    'Low-Carb',
    'Traditional',
    'Low-Fat',
    'Dairy-Free',
    'High-Protein',
    'Intermittent Fasting',
    'Whole30',
    'Mediterranean',
    'Clean Eating'
];
  

const allergies: string[] = [
    'None',
    'Gluten',
    'Dairy',
    'Nuts',
    'Soy',
    'Eggs',
    'Shellfish',
    'Peanuts',
    'Wheat',
    'Corn',
    'Mustard',
    'Sesame',
    'Lupin',
    'Sulfites',
    'Milk'
];
  
const typeOfCuisines: string[] = [
    'American',
    'Mexican',
    'Italian',
    'Mediterranean',
    'Chinese',
    'Indian',
    'French',
    'Japanese',
    'Thai',
    'Greek',
    'Spanish',
    'Vietnamese',
    'Korean',
    'Lebanese',
    'Caribbean',
    'African',
    'Turkish',
    'British',
    'Middle Eastern',
    'Eastern European'
];
  
const serves: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20
];

export const foodGroupsElem = foodGroups.map(foodGroup => <option value={foodGroup}>{foodGroup}</option>)
export const dietsElem = diets.map(diet => <option value={diet}>{diet}</option>)
export const allergiesElem = allergies.map(allergy => <option value={allergy}>{allergy}</option>)
export const typeOfCuisinesElem = typeOfCuisines.map(typeOfCuisine => <option value={typeOfCuisine}>{typeOfCuisine}</option>)
export const servesElem = serves.map(serve => <option value={serve}>{serve}</option>)

  