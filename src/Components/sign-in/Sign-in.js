import React, { useState } from 'react';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`submitted ${email} and ${password}`);
        setPassword("");
        setEmail("");
    }


    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}/>
                <label>Email</label>
                <input type="password" name="password" value={password} required onChange={(e) => setPassword(e.target.value)}/>
                <label>Password</label>

                <input type="submit" value="Submit form"/>
            </form>
        </div>
    )
}

export default SignIn;
