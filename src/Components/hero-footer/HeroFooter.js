import React from 'react';
import './HeroFooter.scss';

const HeroFooter = ({image, title, desc}) => {
    return (
        <div className="hero-footer-item">
            <div className="image">
                <img src={image} alt="" className="item-image"/>
            </div>
            <div className="contents">
                <div className="title">{title}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    )
}

export default HeroFooter;
