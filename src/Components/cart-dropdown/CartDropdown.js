import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";
import CartItem from '../Cart-Item/CartItem';
import {connect} from "react-redux";
import { selectCartItems } from '../../redux/cart/cart.selector';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {withRouter} from "react-router-dom";

const CartDropdown = ({cartItem, history}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                cartItem.length ? 
                cartItem.map(item => (
                 <CartItem key={item.id} item={item}/>
                )) : (
                    <div className="emptycart"> 
                    <span className="cart-icon"><ShoppingCartOutlinedIcon /></span> 
                    <span className="empty-cart-text">Your cart is empty</span>
                    </div>
                )
                }
            </div>
            <CustomButton onClick={() => history.push("/checkout")}>Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItem : selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
