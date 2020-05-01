import { CartTypes } from './cart.types';

const INITIAL_STATE = {
    hidden: true
}

const CartReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartTypes.SET_HIDDEN_STATE:
            return ({
                ...currentState,
                hidden: !currentState.hidden
            })
        default:
            return currentState;
    }
}

export default CartReducer;