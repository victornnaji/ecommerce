import React from 'react';
import "./Footer.scss";
import Button from '../button/Button';
import {Link} from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import {ReactComponent as Logo} from "../../assets/crown.svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container" style={{marginBottom: "2.5rem"}}>
                <div className="footer-cta">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="footer-cta-content">
                            <div className="footer-text">
                            Subscribe to our newsletter and receive exclusive offers every week
                            </div>
                            <div className="footer-form">
                                <input className="form-input" type="email" name="email" id="" placeholder="Enter your email"/>
                                <span><Button text="Subscribe" color="#FBB03B"/></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-menu">
                    <div className="description">
                        <div className="logo">
                                <Link to="/">
                                    <Logo />
                                </Link>
                            </div>

                            <div className="footer-desc">
                                Website designed bu UIKIT. Built with React, Redux,
                                firebase, redux saga etc.
                            </div>

                            <div className="social-links">
                                <FacebookIcon />
                                <TwitterIcon />
                                <GitHubIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                            </div>
                        </div>
                    <div className="footer-menu-items">
                        <div className="footer-menu-item">
                            <p>Shopping online</p>
                            <p>Order status</p>
                            <p>Shipping and delivery</p>
                            <p>Returns</p>
                            <p>Payment Options</p>
                            <p>Contact us</p>
                        </div>
                        <div className="footer-menu-item">
                            <p>Information</p>
                            <p>Gift cards</p>
                            <p>Find a store</p>
                            <p>Newsletter</p>
                            <p>Become a member</p>
                            <p>Site feedback</p>
                        </div>
                        <div className="footer-menu-item">
                            <p>Contact</p>
                            {/* <p>victornnaji.c@gmail.com</p> */}
                            {/* <p>+2347017510120</p> */}
                            <p>Lawnmower office</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
            LawnMower clothings -© {new Date().getFullYear()}. ALL RIGHTS RESERVED.
            </div>
        </div>
    )
}

export default Footer;
