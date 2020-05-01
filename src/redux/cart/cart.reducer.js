import { CartTypes } from './cart.types';
import { addItemToCart } from './cart.utils';

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
        default:
            return currentState;
    }
}

export default CartReducer;