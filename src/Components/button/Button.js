import React from 'react';
import "./Button.scss";

const Button = (props) => {
    return (
        <div style={{backgroundColor: props.color}} onClick={props.handleclick} className="button">
            {props.text}
        </div>
    )
}

export default Button;
