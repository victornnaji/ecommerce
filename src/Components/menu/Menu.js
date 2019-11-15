import React from 'react';
import "./Menu.scss";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Burger from '../Burger/Burger';

const Menu = ({color}) => {
    return (
        <div style={{color: color}} className="container">
            <div className="menu-container">
                <div className="logo">
                    <img src={require("../../assets/logo.png")} alt="" className={`logo-icon-${color}`}/>
                </div>
                <div className="menu-items">
                    <div className="menu-item">Men</div>
                    <div className="menu-item">Women</div>
                    <div className="menu-item">Kids</div>
                </div>
                <div className="menu-icons">
                    <div className="search">
                        <SearchOutlinedIcon />
                    </div>
                    <div className="cart">
                        <ShoppingCartOutlinedIcon />
                    </div>
                    <div className="user">
                        <PersonOutlineOutlinedIcon />
                    </div>
                </div>
            </div>

            <div className="hamburger-menu">
                <Burger />
            </div>
        </div>
    )
}

export default Menu;
