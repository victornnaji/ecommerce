import React from 'react';
import {connect} from "react-redux";
import { selectCollection } from '../../redux/shop/shop.selector';


const Category = ({collection}) => {
    console.log(collection)

    return (
        <div className="container">
            from category
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})



export default connect(mapStateToProps)(Category);
