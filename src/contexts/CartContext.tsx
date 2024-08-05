import { createContext, ReactNode, useEffect, useState } from "react";


export interface CoffeeBuy{
    id: number
    title: string
    description: string
    tags: string[]
    price: number
    image: string
    quantity: number
}

export interface  CoffeProp{
    coffe: CoffeeBuy
}

interface CoffeeProps{
    cart: CoffeeBuy[]
    addCart: (coffe : CoffeeBuy) => void
    totalItems: number
    removeCart: (cart : CoffeeBuy) => void
    quantityChangeCart: (cart : CoffeeBuy, newQuantity : number) => void
}

export const CartContext = createContext({} as CoffeeProps)

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({ children } : CartContextProviderProps){
    const [cart, setCart] = useState<CoffeeBuy[]>([])
    const [totalItems, setTotalItems] = useState(0)

    function addCart( coffe  : CoffeeBuy){
        setCart((state) => [...state, coffe])

    }

    function removeCart (coffee: CoffeeBuy) {
        setCart((prevCart) => 
          prevCart.filter(item => item.id !== coffee.id)
        );
    }

    const quantityChangeCart = (coffee: CoffeeBuy, newQuantity: number) => {
        // Cria uma nova versão do carrinho com a quantidade atualizada
        const updatedCart = cart.map(item =>
          item.id === coffee.id ? { ...item, quantity: newQuantity } : item
        );
        // Atualiza o estado com a nova versão do carrinho
        setCart(updatedCart);
      };
    
    const calcTotalPrice = (cart: CoffeeBuy[]) => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

        setTotalItems(total);
      };
    
      useEffect(() => {
        calcTotalPrice(cart);
        removeCart;
      }, [cart]);


    return(
        <CartContext.Provider value={{
            cart,
            addCart,
            removeCart,
            totalItems,
            quantityChangeCart
        }}>
            { children }
        </CartContext.Provider>
    )
}