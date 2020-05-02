import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({item: { imageUrl, name, price, quantity }}) => (
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <div className="name">
            <span>{name}</span>
        </div>
        <div className="quantity">
            <span>{quantity}</span>
        </div>
        <div className="price">
            <span>{price}$</span>
        </div>
        <div className="remove-button">
            <span>&#10005;</span>
        </div>
    </div>
)

export default CheckoutItem;