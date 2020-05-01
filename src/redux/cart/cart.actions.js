import { CartTypes } from './cart.types';

export const SetHiddenState = () => ({
    type: CartTypes.SET_HIDDEN_STATE
})

export const addCartItem = item => ({
    type: CartTypes.ADD_CART_ITEM,
    payload: item
})