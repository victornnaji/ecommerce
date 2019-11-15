import React from 'react';
import "./Burger.scss";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Burger = () => {
    return (
    <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
    </IconButton>
    )
}

export default Burger;
