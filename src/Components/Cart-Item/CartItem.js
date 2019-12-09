import React from 'react';
import "./CartItem.scss";
import { toMoney } from '../../util';


const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-items-holder">
            <img src={imageUrl} alt={name} className="cart-item-img"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ₦{toMoney(price)}</span>
            </div>
        </div>
    )
}

export default CartItem;
