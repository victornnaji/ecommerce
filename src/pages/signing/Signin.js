import React from 'react';
import "./Signin.scss";
import SignIn from '../../Components/sign-in/Sign-in';
import GoBack from '../../Components/GoBack/GoBack';

const Signin = () => {
    return (
        <>
        <div className="signin-container">
            <div className="container">
                <div className="goback-container">
                    <GoBack />
                </div>
                <div className="content">
                     <SignIn />
                     <h1>hello</h1>
                </div>
            </div>
        </div>
        </>
    )
}

export default Signin;
