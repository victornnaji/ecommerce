import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import {connect} from "react-redux";
import { toogleCartHidden } from '../../redux/cart/card.action';


const CartIcon = ({toogleCartHidden}) => {
    return (
        <div onClick={toogleCartHidden}>
            <Badge badgeContent={0}  showZero color="secondary">
                 <ShoppingCartOutlinedIcon />
            </Badge>
        </div>
    )
};

const mapDispatchToProp = dispatch => ({
    toogleCartHidden: () => dispatch(toogleCartHidden())
})

export default connect(null, mapDispatchToProp)(CartIcon);
