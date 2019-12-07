import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";
import CartItem from '../Cart-Item/CartItem';
import {connect} from "react-redux";
import { selectCartItems } from '../../redux/cart/cart.selector';

const CartDropdown = ({cartItem}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItem.map(item => (
                 <CartItem key={item.id} item={item}/>
                ))}
            </div>
            <CustomButton>Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItem : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
