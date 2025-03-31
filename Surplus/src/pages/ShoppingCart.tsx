import { useContext } from "react"
import { UserContext } from "../UserContext"
import MealElem from "../components/MealSearch/MealElem"

export default function ShoppingCart() {
    const {shoppingCart} = useContext(UserContext)

    const filteredMealsElem = shoppingCart.map(filteredMeal => <MealElem meal={filteredMeal} cart={true} />)

    return (
        <main>
            <h1>Shopping Cart</h1>
            {filteredMealsElem}
            <button>Check out</button>
        </main>
    )
}