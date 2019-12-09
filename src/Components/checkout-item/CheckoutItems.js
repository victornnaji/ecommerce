import React from 'react';
import "./CheckoutItems.scss";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {connect} from "react-redux";
import { clearItemFromCart , addItem, removeItem} from '../../redux/cart/card.action';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DeleteIcon from '@material-ui/icons/Delete';
import { toMoney } from '../../util';



const CheckoutItems = ({cart, clearItem, addItem, removeItem}) => {

    return (
        <TableRow key={cart.id}>
            <TableCell align="left">
               <img src={cart.imageUrl} alt={cart.name} className="cart-img"/>
            </TableCell>
            <TableCell align="left">{cart.name}</TableCell>
            <TableCell align="left">
                <div className="quantity">
                    <div className="arrow"><ArrowLeftIcon onClick={() => removeItem(cart)} fontSize="large"/></div>
                        {cart.quantity}
                    <div className="arrow"><ArrowRightIcon onClick={() => addItem(cart)} fontSize="large"/></div>
                </div>
            </TableCell>
            <TableCell align="left">₦{toMoney(cart.price)}</TableCell>
            <TableCell onClick={() => clearItem(cart)} align="left" style={{fontSize:'1.5rem', marginLeft:'-1rem', cursor:'pointer', color:'‎#FF0000'}}><DeleteIcon/></TableCell>
        </TableRow>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item)),
    addItem : item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItems);
