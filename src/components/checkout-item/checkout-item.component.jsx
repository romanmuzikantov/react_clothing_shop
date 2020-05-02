import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';
import { removeItem, decreaseItem, addCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, item: { imageUrl, name, price, quantity }, removeItemFromCart, decreaseItemFromCart, addItemToCart}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <div className="name">
            <span>{name}</span>
        </div>
        <div className="quantity">
            <div className="arrow" onClick={() => decreaseItemFromCart(item)}>&#10094;</div>
            <span>{quantity}</span>
            <div className="arrow" onClick={() => addItemToCart(item)}>&#10095;</div>
        </div>
        <div className="price">
            <span>{price}$</span>
        </div>
        <div className="remove-button" onClick={() => removeItemFromCart(item)}>
            <span>&#10005;</span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: cartItem => dispatch(removeItem(cartItem)),
    decreaseItemFromCart: cartItem => dispatch(decreaseItem(cartItem)),
    addItemToCart: cartItem => dispatch(addCartItem(cartItem))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);