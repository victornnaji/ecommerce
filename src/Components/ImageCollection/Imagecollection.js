import React from 'react';
import "./Imagecollection.scss";
import Badge from '@material-ui/core/Badge';
import CustomButton from '../custom-button/CustomButton';
import {connect} from "react-redux";
import { addItem } from '../../redux/cart/card.action';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { toMoney } from '../../util';

const Imagecollection = ({item, addItem}) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            setOpen(false);
        }
    
        setOpen(false);
      };


    const handleClick = () => {
        addItem(item);
        setOpen(true);
    }
    const {id, imageUrl, price, name, discount, oldPrice} = item;
    return (
        <div className="collection-items" key={id}>
            <div className="collection-image" style={{backgroundImage: `url(${imageUrl})`}} >
                <div className="overlay" />
            </div>
                {discount !== undefined && <div className="discount-price"><Badge badgeContent={`-${discount}`} color="error"/></div>}
                <div className="collection-footer">
                    <div className="name">{name}</div>
                    <div className="prices">
                        <div className="newprice">{`₦${toMoney(price)}`}</div>
                        {oldPrice !== undefined && <div className="oldPrice">{`₦${toMoney(oldPrice)}`}</div> }
                    </div>
                    <div className="btn" onClick={handleClick}>
                       <CustomButton>Add to cart </CustomButton>
                    </div>
                </div>

                <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }} 
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                ContentProps={{
                'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Item added to cart</span>}
                action={[<IconButton key="close"
                aria-label="close"
                color="inherit"
                onClick={handleClose} >
                    <CloseIcon />
                </IconButton>]}
        />
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Imagecollection);
