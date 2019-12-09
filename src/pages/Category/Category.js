import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import { selectCollection } from '../../redux/shop/shop.selector';
import "./Category.scss";
import Imagecollection from '../../Components/ImageCollection/Imagecollection';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/core/Slider';



const Category = ({collection}) => {
    const [value, setValue] = React.useState([0, 100]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };


    return (
        <div className="container">
            <div className="category-holder">
                <div className="sidebar">
                    <div className="product-type">
                        <div className="sidebar-title">Product Type</div>
                        <div className="sidebar-body">
                            <div className="body-item">
                                <Checkbox/>
                                <span>T-shirts</span>
                            </div>
                            <div className="body-item">
                                <Checkbox/>
                                <span>Sweat Shirts</span>
                            </div>
                            <div className="body-item">
                                <Checkbox/>
                                <span>Tops</span>
                            </div>
                        </div>
                    </div>

                    <div className="product-type">
                        <div className="sidebar-title">Price</div>
                        <div className="sidebar-body">
                            <div className="body-item-slider">
                              <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                style={{width: "80%"}}
                              />
                            </div>
                        </div>
                    </div>

                    <div className="product-type">
                        <div className="sidebar-title">Categories</div>
                        <div className="sidebar-body">
                            <div className="body-item-category">
                               <div className="links">
                                  <Link to='/shop/mens'>Mens</Link>
                               </div>

                               <div className="links">
                                  <Link to='/shop/womens'>Womens</Link>
                               </div>

                               <div className="links">
                                  <Link to='/shop/kids'>kids</Link>
                               </div>

                               <div className="links">
                                  <Link to='/shop/latest'>latest Collections</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-container">
                    <div className="top-heading">

                        {collection.title === "latest collection" ? <div className="title">{`${collection.title} (${collection.items.length})`}</div> : 
                        <div className="title">{`${collection.title} Collection (${collection.items.length})`}</div> }

                        <div className="heading-filter">
                        sort : Popular
                        </div>
                    </div>

                    <div className="display">
                        {
                          collection.items.map(collection => (
                            <div className="display-items" key={collection.id}>
                               <Imagecollection item ={collection}/>
                            </div>
                          ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})



export default connect(mapStateToProps)(Category);
