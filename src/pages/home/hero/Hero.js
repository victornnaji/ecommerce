import React from 'react';
// import Menu from '../../../Components/menu/Menu';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import "./Hero.scss";
import HeroFooter from '../../../Components/hero-footer/HeroFooter';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container">
                <div className="hero-contents">
                    <div className="hero-heading">Sale of the summer collection</div>
                    <div className="hero-button">
                        <div className="button-bg"><ArrowForwardIcon /></div>
                        <span>Shop now</span>
                    </div>
                </div>
            </div>
           <div className="hero-footer">
               <div className="row justify-content-center">
                   <div className="col-lg-10">
                      <div className="hero-footer-contents">
                         <HeroFooter 
                          image={require('../../../assets/ship2.png')}
                          title="Free Shipping"
                          desc="On purchases over $199"/> 
                         <HeroFooter 
                         image={require('../../../assets/happy2.png')}
                         title="99% Satisfied Customers"
                         desc="Our clients' opinions 
                         speak for themselves"/> 
                         <HeroFooter 
                         image={require('../../../assets/dollar2.png')}
                         title="Originality Guaranteed"
                         desc="30 days warranty for each 
                         product from our store"/> 
                      </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Hero;

