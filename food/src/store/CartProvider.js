import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updAmount = state.totalAmount + action.payload.price * action.payload.amount;
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id)
        const existingCartItem = state.items[existingItemIndex];

        let updatedItem;
        let updatedItems;

        if(existingCartItem) {
            updatedItem = {...existingCartItem, amount: existingCartItem.amount + action.payload.amount}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {

            updatedItems = [...state.items, action.payload]
        }
        return {items: updatedItems, totalAmount: updAmount}
    }

    if(action.type === 'REMOVE_ITEM') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.payload)
        const existingCartItem = state.items[existingItemIndex];
        const updAmount = state.totalAmount - existingCartItem.price;
        let updatedItem;
        let updatedItems;
        if(existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.payload)
        } else {
            updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        }

        return {items: updatedItems, totalAmount: updAmount}
    }
        return defaultCartState


}

const CartProvider = ({children}) => {

    const [cartState, dispatchCartActions] = useReducer(cartReducer, defaultCartState);


    const addItemToCartHandler = item => {
        dispatchCartActions({type: 'ADD_ITEM', payload: item})
    };
    const removeItemFromCartHandler = id => {
        dispatchCartActions({type: 'REMOVE_ITEM', payload: id})
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}

export default CartProvider;