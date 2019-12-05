import { addItemsToCart } from "./cart.util";

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
};


const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "TOOGLE_CART_HIDDEN":
            return {
                ...state, 
                hidden: !state.hidden
        }
        case "ADD_ITEM":
            return {
                ...state,
                cartItem: addItemsToCart(state.cartItem, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;
