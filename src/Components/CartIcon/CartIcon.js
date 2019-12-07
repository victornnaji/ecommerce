import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import {connect} from "react-redux";
import { toogleCartHidden } from '../../redux/cart/card.action';


const CartIcon = ({toogleCartHidden, ItemCount}) => {
    console.log(ItemCount);
    return (
        <div onClick={toogleCartHidden} style={{transition: "all .2s"}}>
            <Badge badgeContent={ItemCount}  showZero color="secondary">
                 <ShoppingCartOutlinedIcon />
            </Badge>
        </div>
    )
};

const mapDispatchToProp = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

const mapStateToProps = ({cart: {cartItem}}) => ({
    ItemCount: cartItem.reduce((acc, cur) => acc + cur.quantity,0)
})

export default connect(mapStateToProps, mapDispatchToProp)(CartIcon);
