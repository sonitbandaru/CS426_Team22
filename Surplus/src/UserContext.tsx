import React, { useState, createContext} from "react";
import { Meal } from "./database/Donations";

interface UserContextProps {
    email: string | null;
    setEmail: (email: string | null) => void;
    shoppingCart: Meal[]
    addMeal: (currMeal: Meal) => void
    removeMeal: (currMeal: Meal) => void
}

const UserContext = createContext<UserContextProps>({email: null, setEmail: () => {}, shoppingCart: [], addMeal: () => {}, removeMeal: () => {}})

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [email, setEmail] = useState<string | null>(null);
    const [shoppingCart, setShoppingCart] = useState<Meal[]>([])

    const addMeal = (currMeal: Meal) => {
        setShoppingCart(prevState => [...prevState, currMeal])
    }

    const removeMeal = (currMeal: Meal) => {
        setShoppingCart(prevState => prevState.filter(meal => meal.mealName !== currMeal.mealName))
    }

    return (
        <UserContext.Provider value={{email, setEmail, shoppingCart, addMeal, removeMeal}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export {UserContext}