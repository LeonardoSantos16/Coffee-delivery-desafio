import { ADD_CART, REMOVE_CART, QUANTITY_CHANGE_CART, ADD_USER } from "./actions";
export function cartReducer(state: State, action: any) {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        case QUANTITY_CHANGE_CART:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.newQuantity }
                        : item
                ),
            };
        case ADD_USER:
            return {
                ...state,
                user: action.payload,
            };
        case 'SET_TOTAL_ITEMS':
            return {
                ...state,
                totalItems: action.payload,
            };
        case 'SET_QUANTITY_ITEMS_CARD':
            return {
                ...state,
                quantityItemsCard: action.payload,
            };
        default:
            return state;
    }
}
