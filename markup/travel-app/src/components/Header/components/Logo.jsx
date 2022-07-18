import { NavLink } from "react-router-dom";

const Logo = () => {    
    return (
        <>
            <NavLink to='/' className="header__logo">Travel App</NavLink>
            {/* <a href="./index.html" className="header__logo">Travel App</a> */}
        </>
    );
};

export default Logo;