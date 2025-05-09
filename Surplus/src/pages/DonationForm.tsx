import { foodGroupsElem, dietsElem, allergiesElem, typeOfCuisinesElem, servesElem } from "../database/Categories"
import "../styles/DonationForm.css";

const MEAL_SERVICE_URL = "http://localhost:3000/"

async function addMeal(data: FormData) {
    const mealName = String(data.get('mealName'))
    const donor = String(data.get('donor'))
    const foodGroup = String(data.get('foodGroup'))
    const diet = String(data.get('diet'))
    const allergy = String(data.get('allergy'))
    const typeOfCuisine = String(data.get('typeOfCuisine'))
    const serve = Number(data.get('serve'))

    const addMealRes = await fetch(MEAL_SERVICE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({image: '', mealName: mealName, donor: donor, foodGroup: foodGroup, diet: diet, allergies: allergy, typeOfCuisine: typeOfCuisine, serves: serve})
    });

    if (!addMealRes.ok) {
        alert(`${mealName} not stored. Try again.`)
    }
}

export default function DonationForm() {
    return (
        <main>
            <h1>Donate Food</h1>
            <form action={addMeal}>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type='file' id='image' name='image' accept='image/*' />
                </div>
                <div>
                    <label htmlFor='mealName'>Meal name<span style={{color: 'red'}}>*</span></label>
                    <input type='text' id='mealName' name='mealName' defaultValue='' required></input>
                </div>
                <div>
                    <label htmlFor='donor'>Donor<span style={{color: 'red'}}>*</span></label>
                    <input type='text' id='donor' name='donor' defaultValue='' required></input>
                </div>
                <div>
                    <label htmlFor="foodGroup">Food group<span style={{color: 'red'}}>*</span></label>
                    <select id='foodGroup' name='foodGroup' defaultValue='' required>
                        <option value='' disabled>-- Choose a food group --</option>
                        {foodGroupsElem}
                    </select>
                </div>
                <div>
                    <label htmlFor="diet">Diet</label>
                    <select id='diet' name='diet' defaultValue=''>
                        <option value='None'>-- Choose a diet --</option>
                        {dietsElem}
                    </select>
                </div>
                <div>
                    <label htmlFor="allergy">Allergy</label>
                    <select id='allergy' name='allergy' defaultValue=''>
                        <option value='None'>-- Choose an allergy --</option>
                        {allergiesElem}
                    </select>
                </div>
                <div>
                    <label htmlFor="typeOfCuisine">Type of cuisine</label>
                    <select id='typeOfCuisine' name='typeOfCuisine' defaultValue=''>
                        <option value='None'>-- Choose a type of cuisine --</option>
                        {typeOfCuisinesElem}
                    </select>
                </div>
                <div>
                    <label htmlFor="serve">Serves<span style={{color: 'red'}}>*</span></label>
                    <select id='serve' name='serve' defaultValue='' required>
                        <option value={0} disabled>-- Choose a number of servings --</option>
                        {servesElem}
                    </select>
                </div>
                <button>Submit</button>
            </form>

        </main>
    )
}