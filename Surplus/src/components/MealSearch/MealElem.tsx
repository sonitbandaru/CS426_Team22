import { Meal } from "../../database/Donations"
import { useContext } from "react"
import { UserContext } from "../../UserContext"

export default function MealElem(props: {meal: Meal, cart: boolean}) {
    const meal = props.meal

    const {addMeal, removeMeal} = useContext(UserContext)

    function changeMeal(currMeal: Meal) {
        if (props.cart) {
            removeMeal(currMeal)
        } else {
            addMeal(currMeal)
        }
    }

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
                <button type='button' onClick={() => changeMeal(meal)}>{props.cart ? "Remove from Cart" : "Add to Cart"}</button>
            </div>
        </section>
    )
}