import React from 'react';
import {Route} from "react-router-dom";
import Category from '../Category/Category';


const ShopPage = ({match}) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}/:categoryId`} component={Category}/>
        </div> 
    )
};



export default ShopPage;
