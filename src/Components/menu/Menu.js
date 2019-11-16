import React from 'react';
import "./Menu.scss";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Burger from '../Burger/Burger';
import {Link} from "react-router-dom";

const Menu = ({color, backgroundColor}) => {
    return (
        <div style={{color: color, backgroundColor}} className="menu-content">
        <div className="container">
            <div className="menu-container">
                <div className="logo">
                    <Link to="/">
                    <img src={require("../../assets/logo.png")} alt="" className={`logo-icon-${color}`}/>
                    </Link>
                </div>
                <div className="menu-items">
                    <Link to ="/men" className="menu-item">Men</Link>
                    <Link to ="/women" className="menu-item">Women</Link>
                    <Link to ="/kids" className="menu-item">Kids</Link>
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
        </div>
    )
}

export default Menu;
