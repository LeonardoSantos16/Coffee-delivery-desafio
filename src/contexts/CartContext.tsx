import { createContext, ReactNode, useEffect, useReducer } from "react";
import { cartReducer } from '../reducers/reducer'; 
import { ADD_CART, REMOVE_CART, QUANTITY_CHANGE_CART, ADD_USER } from '../reducers/actions'; 
import { CoffeeBuy, addressUser } from '../types'; 

interface CartContextProps {
    cart: CoffeeBuy[];
    addCart: (coffe: CoffeeBuy) => void;
    removeCart: (cart: CoffeeBuy) => void;
    quantityChangeCart: (cart: CoffeeBuy, newQuantity: number) => void;
    addUser: (user: addressUser) => void;
    user: addressUser | null;  
    totalItems: number;
    quantityItemsCard: number;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [state, dispatch] = useReducer(cartReducer, {
        cart: [],
        totalItems: 0,
        user: null,
        quantityItemsCard: 0,
    });

    useEffect(() => {
        const cartString = localStorage.getItem('cart');
        if (cartString) {
            try {
                const parsedCart: CoffeeBuy[] = JSON.parse(cartString);
                parsedCart.forEach((item) => {
                    dispatch({ type: ADD_CART, payload: item });
                });
            } catch (error) {
                console.error('Erro ao fazer parse dos dados do carrinho:', error);
            }
        }
    }, []);

    useEffect(() => {
        const total = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        dispatch({ type: 'SET_TOTAL_ITEMS', payload: total });

        const totalQuantity = state.cart.reduce((acc, item) => acc + item.quantity, 0);
        dispatch({ type: 'SET_QUANTITY_ITEMS_CARD', payload: totalQuantity });

        if (state.cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(state.cart));
        } else {
            localStorage.removeItem('cart');
        }
    }, [state.cart]);

    const addCart = (coffe: CoffeeBuy) => {
        dispatch({ type: ADD_CART, payload: coffe });
    };

    const removeCart = (coffee: CoffeeBuy) => {
        dispatch({ type: REMOVE_CART, payload: coffee });
    };

    const quantityChangeCart = (coffee: CoffeeBuy, newQuantity: number) => {
        dispatch({ type: QUANTITY_CHANGE_CART, payload: { id: coffee.id, newQuantity } });
    };

    const addUser = (user: addressUser) => {
        dispatch({ type: ADD_USER, payload: user });
    };

    return (
        <CartContext.Provider value={{
            cart: state.cart,
            addCart,
            removeCart,
            quantityChangeCart,
            addUser,
            user: state.user,
            totalItems: state.totalItems,
            quantityItemsCard: state.quantityItemsCard,
        }}>
            {children}
        </CartContext.Provider>
    );
}
