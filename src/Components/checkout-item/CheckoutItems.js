import React from 'react';
import "./CheckoutItems.scss";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



const CheckoutItems = ({cart}) => {

    return (
        <TableRow key={cart.id}>
            <TableCell align="left">
               <img src={cart.imageUrl} alt={cart.name} className="cart-img"/>
            </TableCell>
            <TableCell align="left">{cart.name}</TableCell>
            <TableCell align="left">{cart.quantity}</TableCell>
            <TableCell align="left">${cart.price}</TableCell>
            <TableCell align="left" style={{fontSize:'1.5rem', marginLeft:'-1rem'}}>&#10005;</TableCell>
        </TableRow>
    )
}

export default CheckoutItems;
