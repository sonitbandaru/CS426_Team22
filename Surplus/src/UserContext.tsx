import React, { useState } from "react";
import { createContext } from "react";
import { Meal } from "./database/Donations";

interface UserContextProps {
    shoppingCart: Meal[]
    addMeal: (currMeal: Meal) => void
    removeMeal: (currMeal: Meal) => void
}

const UserContext = createContext<UserContextProps>({shoppingCart: [], addMeal: () => {}, removeMeal: () => {}})

interface UserProviderProps {
    children: React.ReactNode
}

const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState<Meal[]>([])

    const addMeal = (currMeal: Meal) => {
        setShoppingCart(prevState => [...prevState, currMeal])
    }

    const removeMeal = (currMeal: Meal) => {
        setShoppingCart(prevState => prevState.filter(meal => meal.mealName !== currMeal.mealName))
    }

    return (
        <UserContext.Provider value={{shoppingCart, addMeal, removeMeal}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export {UserContext}