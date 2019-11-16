import React from 'react';
import "./Choose.scss";

const Choose = ({imageUrl, title,desc}) => {
    return (
        <div className="choose-items">
            <img className="choose-img" src={imageUrl} alt=""/>
            <div className="choose-title">{title}</div>
            <div className="choose-desc">{desc}</div>
        </div>
    )
}

export default Choose;
