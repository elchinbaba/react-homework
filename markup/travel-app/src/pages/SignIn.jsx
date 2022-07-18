import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSingIn = (event) => {
        event.preventDefault();
        const isPasswordValid = password.length > 3 && password.length < 20;
        if (email) {
            if (isPasswordValid) {
                const singInPath = '/';
                navigate(singInPath);
            }
            else {
                alert('Password must be between 3 and 20 characters long');
            }
        }
        else {
            alert('Fill the fields');
        }
    }

    return (
        <>
            <Header withNav={false} />
            <main className="sign-in-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-in-form" autoComplete="off">
                    <h2 className="sign-in-form__title">Sign In</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" required />
                    </label>
                    <button className="button" type="submit" onClick={handleSingIn}>Sign In</button>
                </form>
                <span>
                    Already have an account?
                    <NavLink to="/sign-up" className="sign-in-form__link">Sign Up</NavLink>
                    {/* <a href="./sign-up.html" className="sign-in-form__link">Sign Up</a> */}
                </span>
            </main>
            <Footer />
        </>
    );
};

export default SignIn;