import React from 'react';
import "./Menu.scss";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import TemporaryDrawer from './ToogleMenu';
import {auth} from "../../firebase/firebase.util";
import {connect} from "react-redux";
import CartDropdown from '../cart-dropdown/CartDropdown';
import CartIcon from '../CartIcon/CartIcon';
import {createStructuredSelector} from "reselect";
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';


const Menu = ({currentUser, hidden}) => {

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
                        <CartIcon />
                    </div>
                    {
                        currentUser ? 
                        <div className="user" onClick={() => auth.signOut()}>
                           <span className="signinuser"> 
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

            {hidden ? null : <CartDropdown />}

            <div className="hamburger-menu">
                <TemporaryDrawer user={currentUser}/>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser : selectCurrentUser,
    hidden : selectCartHidden
})

export default connect(mapStateToProps)(Menu);
