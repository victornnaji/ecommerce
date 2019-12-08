import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";
import CartItem from '../Cart-Item/CartItem';
import {connect} from "react-redux";
import { selectCartItems } from '../../redux/cart/cart.selector';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {withRouter} from "react-router-dom";
import { toogleCartHidden } from '../../redux/cart/card.action';

const CartDropdown = ({cartItem, history, toogleCartHidden}) => {
    const handleClick = (e) => {
        e.preventDefault();
        history.push("/checkout");
        toogleCartHidden();
    }
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
            <CustomButton onClick={handleClick}>Checkout</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => ({
    cartItem : selectCartItems(state)
})

const mapDispatchToProp = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProp)(CartDropdown));
