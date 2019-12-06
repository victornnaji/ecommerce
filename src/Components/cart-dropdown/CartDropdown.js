import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";
import CartItem from '../Cart-Item/CartItem';
import {connect} from "react-redux";

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

const mapStateToProps = ({cart: {cartItem}}) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropdown);
