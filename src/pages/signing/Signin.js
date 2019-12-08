import React from 'react';
import "./Signin.scss";
import SignIn from '../../Components/sign-in/Sign-in';
import GoBack from '../../Components/GoBack/GoBack';
import SignUp from '../../Components/sign-up/SignUp';

const Signin = () => {
    return (
        <div className="signin-container">
            <div className="container">
                <div className="goback-container">
                    <GoBack text="Go back"/>
                </div>
                <div className="content">
                    <div><SignIn /></div> 
                    <div className="signup"><SignUp /></div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
