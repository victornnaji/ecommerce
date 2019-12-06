import React from 'react';
import "./CartItem.scss";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return (
        <div className="cart-items-holder">
            <img src={imageUrl} alt={name} className="cart-item-img"/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </div>
            {/* <div className="x">X</div> */}

            {/* <div>hello</div>
            <div className="item-details">
                hello
            </div> */}
        </div>
    )
}

export default CartItem;
