import { addItemsToCart , removeItemFromCart} from "./cart.util";

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
        case "CLEAR_ITEM":
            return {
                ...state,
                cartItem: state.cartItem.filter(cartitem => cartitem.id !== action.payload.id)
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                cartItem: removeItemFromCart(state.cartItem, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;
