import { Meal } from "../../database/Donations"

export default function MealElem(props: {meal: Meal}) {
    const meal = props.meal
    return (
        <section className="meal">
            <div>
                <img src={meal.image} alt={`image of ${meal.mealName}`} />
            </div>
            <div>
                <p>{meal.mealName}</p>
                <p>{meal.donor}</p>
                <p>{meal.foodGroup} - {meal.diet} - {meal.allergies}</p>
                <p>{meal.typeOfCuisine} - {meal.serves}</p>
            </div>
            <div>
                <button type='button'>Add to Cart</button>
            </div>
        </section>
    )
}