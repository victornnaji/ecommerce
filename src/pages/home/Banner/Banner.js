import React from 'react';
import "./Banner.scss";
import Button from '../../../Components/button/Button';
import Badge from '@material-ui/core/Badge';

const Banner = (props) => {
    return (
        <div style={{width: props.width, backgroundImage:`
        linear-gradient(
            rgba(0, 0, 0, 0.35), 
            rgba(0, 0, 0, 0.35)
          ),
        url(${props.image})`}} className="banner-container">
           <div className="banner-text">
               {props.discount !== undefined ? <div className="discount"><Badge badgeContent="-50%" color="error" /></div> : null}
               <div className="title">{props.title}</div>
               <Button color="white" text={props.buttontext}/>
           </div>
        </div>
    )
}

export default Banner;
