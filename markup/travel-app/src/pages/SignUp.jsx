import Header from "../components/Header/Header";
import Footer from "../components/Footer";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const isPasswordValid = password.length > 3 && password.length < 20;
        if (name && email) {
            if (isPasswordValid) {
                const singUpPath = '/sign-in';
                navigate(singUpPath);
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
            <main className="sign-up-page">
                <h1 className="visually-hidden">Travel App</h1>
                <form className="sign-up-form" autoComplete="off">
                    <h2 className="sign-up-form__title">Sign Up</h2>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Full name</span>
                        <input name="full-name" type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Email</span>
                        <input name="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                    </label>
                    <label className="trip-popup__input input">
                        <span className="input__heading">Password</span>
                        <input name="password" type="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                    </label>
                    <button className="button" type="submit" onClick={handleSignUp}>Sign Up</button>
                </form>
                <span>
                    Already have an account?
                    <NavLink to="/sign-in" className="sign-up-form__link">Sign In</NavLink>
                    {/* <a href="./sign-in.html" className="sign-up-form__link">Sign In</a> */}
                </span>
            </main>
            <Footer />
        </>
    );
};

export default SignUp;