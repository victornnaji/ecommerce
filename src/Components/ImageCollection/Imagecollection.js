import React from 'react';
import "./Imagecollection.scss";
import Badge from '@material-ui/core/Badge';

const Imagecollection = ({id, imageUrl, price, name, discount, oldPrice}) => {
    return (
        <div className="collection-items" key={id}>
            <div className="collection-image" style={{backgroundImage: `url(${imageUrl})`}} >
                <div className="overlay">
                    
                </div>
            </div>
                {discount !== undefined && <div className="discount-price"><Badge badgeContent={`-${discount}`} color="error"/></div>}
                <div className="collection-footer">
                    <div className="name">{name}</div>
                    <div className="prices">
                        <div className="newprice">{`$${price}`}</div>
                        {oldPrice !== undefined && <div className="oldPrice">{`$${oldPrice}`}</div> }
                    </div>
                </div>
        </div>
    )
}

export default Imagecollection;
