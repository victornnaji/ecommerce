import React from 'react';
import "./Button.scss";

const Button = (props) => {
    return (
        <a href="null" style={{backgroundColor: props.color}} className="button">
            {props.text}
        </a>
    )
}

export default Button;
