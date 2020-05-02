import { CartTypes } from './cart.types';
import { addItemToCart, decreaseItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.SET_HIDDEN_STATE:
            return ({
                ...currentState,
                hidden: !currentState.hidden
            })
        case CartTypes.ADD_CART_ITEM:
            return ({
                ...currentState,
                cartItems: addItemToCart(currentState.cartItems, action.payload)
            })
        case CartTypes.REMOVE_CART_ITEM:
            return ({
                ...currentState,
                cartItems: currentState.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            })
        case CartTypes.DECREASE_CART_ITEM:
            return ({
                ...currentState,
                cartItems: decreaseItemFromCart(currentState.cartItems, action.payload)
            })
        default:
            return currentState;
    }
}

export default CartReducer;