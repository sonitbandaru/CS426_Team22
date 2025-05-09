import { foodGroupsElem, dietsElem, allergiesElem, typeOfCuisinesElem, servesElem } from "../../database/Categories"
import { useState } from "react"
import MealElem from "./MealElem"

const MEAL_SERVICE_URL = "http://localhost:3000/"

export default function SearchEngine() {

    const [filteredMeals, setFilteredMeals] = useState([])

    const filteredMealsElem = filteredMeals.map(filteredMeal => <MealElem meal={filteredMeal} cart={false} />)

    async function searchMeal(data: FormData) {
        const search = String(data.get('search')).toLowerCase()
        const foodGroup = String(data.get('foodGroup'))
        const diet = String(data.get('diet'))
        const allergy = String(data.get('allergy'))
        const typeOfCuisine = String(data.get('typeOfCuisine'))
        const serve = Number(data.get('serve'))

        const query = new URLSearchParams({mealName: search, foodGroup: foodGroup, diet: diet, allergies: allergy, typeOfCuisine: typeOfCuisine, serves: String(serve)})

        const getMealRes = await fetch(`${MEAL_SERVICE_URL}?${query}`, {
            method: "GET",
        });

        let filtered = []
        if (!getMealRes.ok) {
            alert(`Search not successful. Try again.`)
        } else {
            filtered = await getMealRes.json()
        }

        setFilteredMeals(filtered)
    }
    
    return (
        <section>
            <form action={searchMeal}>
                <div>
                    <label htmlFor='search'>Search for meal</label>
                    <input type='text' id='search' name='search' defaultValue=''></input>
                </div>
                <div className="categories">
                    <div>
                        <label htmlFor="foodGroup">Food group</label>
                        <select id='foodGroup' name='foodGroup' defaultValue=''>
                            <option value=''>-- Choose a food group --</option>
                            {foodGroupsElem}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="diet">Diet</label>
                        <select id='diet' name='diet' defaultValue=''>
                            <option value=''>-- Choose a diet --</option>
                            {dietsElem}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="allergy">Allergy</label>
                        <select id='allergy' name='allergy' defaultValue=''>
                            <option value=''>-- Choose an allergy --</option>
                            {allergiesElem}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="typeOfCuisine">Type of cuisine</label>
                        <select id='typeOfCuisine' name='typeOfCuisine' defaultValue=''>
                            <option value=''>-- Choose a type of cuisine --</option>
                            {typeOfCuisinesElem}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="serve">Serves</label>
                        <select id='serve' name='serve' defaultValue=''>
                            <option value={0}>-- Choose a number of servings --</option>
                            {servesElem}
                        </select>
                    </div>
                </div>
                <button>Search</button>
            </form>

            {filteredMealsElem}
        </section>
    )
}