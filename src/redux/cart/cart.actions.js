import { CartTypes } from './cart.types';

export const SetHiddenState = () => ({
    type: CartTypes.SET_HIDDEN_STATE
})

export const addCartItem = item => ({
    type: CartTypes.ADD_CART_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_CART_ITEM,
    payload: item
})

export const decreaseItem = item => ({
    type: CartTypes.DECREASE_CART_ITEM,
    payload: item
})