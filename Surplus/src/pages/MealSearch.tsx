import Leaderboard from "../components/MealSearch/Leaderboard"
import SearchEngine from "../components/MealSearch/SearchEngine"
import MealList from "../components/MealSearch/MealList"
import Cart from "../components/MealSearch/Cart"
export default function MealSearch() {
    return (
        <main>
            <h1>Find a Meal</h1>
            <Leaderboard />
            <SearchEngine />
            <MealList />
            <Cart />
        </main>
    )
}