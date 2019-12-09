import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {withRouter} from "react-router-dom";
import GoBack from '../../Components/GoBack/GoBack';
import "./Checkout.scss";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selector";
import CheckoutItems from '../../Components/checkout-item/CheckoutItems';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Selected from '../../Components/Selected/Selected';
import Paystack from '../../Components/Paystack/Paystack';
import { toMoney } from '../../util';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowY: 'auto',
      overflowX: 'auto',
      marginBottom: '2rem',
    },
    table: {
      minWidth: 650,
    },
    tableWrapper: {
        maxHeight: 400,
        overflow: 'auto',
    },
  });

const Checkout = ({cartItem, cartTotal}) => {
    const classes = useStyles();

    return (
        <div className="container">
            <div className="checkout-container">
                <div className="checkout-heading">
                    <div className="text">Shopping Cart</div>
                    <div className="logos"><ShoppingCartOutlinedIcon /></div>
                </div>

                <Paper className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-label="CheckOut Items">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="left">Description</TableCell>
                                    <TableCell align="left">Quantity</TableCell>
                                    <TableCell align="left">Price</TableCell>
                                    <TableCell align="left">Remove</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {
                                cartItem.length ? cartItem.map(
                                    cart => <CheckoutItems key={cart.id} cart={cart}/>
                                )
                                : <TableRow>
                                    <TableCell align="center">Cart is empty</TableCell>
                                </TableRow>
                            }
                            </TableBody>
                    </Table>
                    </div>
                </Paper>

                <div className="container">
                 <div className="footer">
                    <div className="goback">
                        <GoBack text="Continue Shopping" />
                    </div>
                    <div className="total-checkout">
                        <div className="total">Total Cost: ₦{toMoney(cartTotal)}</div>
                        <div className="checkout"><Paystack amount={cartTotal*100}/></div>
                    </div>
                 </div>

                 <Selected />
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = createStructuredSelector({
    cartItem : selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(withRouter(Checkout));
