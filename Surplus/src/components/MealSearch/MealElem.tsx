import { Meal } from "../../database/donations"
export default function MealElem(props: {meal: Meal}) {
    const meal = props.meal
    return (
        <section>
            <div>
                <img src={meal.image} alt={`image of ${meal.mealName}`} />
            </div>
            <div>
                <p>{meal.mealName}</p>
                <p>{meal.donor} - {meal.donorRating}</p>
                <p>{meal.foodGroup} - {meal.diet} - {meal.allergies}</p>
                <p>{meal.healthyScore} - {meal.typeOfCuisine} - {meal.serves}</p>
            </div>
            <div>
                <button type='button'>Add to Cart</button>
            </div>
        </section>
    )
}