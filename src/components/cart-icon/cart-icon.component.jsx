import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShopingIcon } from '../../assets/cart.svg';
import { SetHiddenState } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.styles.scss';

const CartIcon = ({ setHiddenState, totalItem }) => (
    <div className="cart-icon" onClick={setHiddenState}>
        <ShopingIcon className="shopping-icon" />
        <span className="item-count">{totalItem}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    setHiddenState: () => dispatch(SetHiddenState())
})

const mapStateToProps = (state) => ({
    totalItem: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);