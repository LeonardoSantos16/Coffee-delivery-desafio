import { createContext, ReactNode, useState } from "react";

export interface CoffeeBuy{
    id: number
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
}

interface CoffeeProp{
    coffe: CoffeeBuy
}
interface CoffeeProps{
    CoffeType: CoffeeBuy[]
}

export const CartContext = createContext({} as CoffeeProps)

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children } : CartContextProviderProps){
    const [cart, setCart] = useState<CoffeeBuy[]>([])


    function addCart({ coffe } : CoffeeProp){
        setCart((state) => [...state, coffe])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addCart,
        }}>
            { children }
        </CartContext.Provider>
    )
}