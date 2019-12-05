import React from 'react';
import "./Imagecollection.scss";
import Badge from '@material-ui/core/Badge';
import CustomButton from '../custom-button/CustomButton';
import {connect} from "react-redux";
import { addItem } from '../../redux/cart/card.action';

const Imagecollection = ({item, addItem}) => {
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
                        <div className="newprice">{`$${price}`}</div>
                        {oldPrice !== undefined && <div className="oldPrice">{`$${oldPrice}`}</div> }
                    </div>
                    <div className="btn" onClick={() => addItem(item)}>
                       <CustomButton>Add to cart </CustomButton>
                    </div>
                </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(Imagecollection);
