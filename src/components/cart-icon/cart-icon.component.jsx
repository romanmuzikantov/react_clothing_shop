import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShopingIcon } from '../../assets/cart.svg';
import { SetHiddenState } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ setHiddenState }) => (
    <div className="cart-icon" onClick={setHiddenState}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setHiddenState: () => dispatch(SetHiddenState())
})

export default connect(null, mapDispatchToProps)(CartIcon);