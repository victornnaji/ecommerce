import React from 'react';
import "./Menu.scss";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import TemporaryDrawer from './ToogleMenu';
import {withRouter} from "react-router-dom";
import {auth} from "../../firebase/firebase.util";

const Menu = ({currentUser}) => {

    return (
        <div className="menu-content">
        <div className="container">
            <div className="menu-container">
                <div className="logo">
                    <Link to="/">
                        <Logo />
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
                    {
                        currentUser ? 
                        <div className="user" onClick={() => auth.signOut()}>
                           <span class="signinuser"> 
                              <img src={require("../../assets/user.png")} alt="" className="signin_image"/> 
                          </span> Sign Out
                        </div> :
                        <div className="user">
                            <PersonOutlineOutlinedIcon /> 
                            <span>
                                <Link to ="/signin" className="menu-item">Sign in</Link>
                            </span>
                        </div>
                    }
                </div>
            </div>

            <div className="hamburger-menu">
                <TemporaryDrawer />
            </div>
        </div>
        </div>
    )
}

export default withRouter(Menu);
