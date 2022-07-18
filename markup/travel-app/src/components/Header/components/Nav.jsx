import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

const Nav = () => {
    const navigate = useNavigate();
    const routeChange = () => {
        const signOutPath = '/sign-in';
        navigate(signOutPath);
    };

    return (
        <nav className="header__nav">
            <ul className="nav-header__list">
                <li className="nav-header__item" title="Bookings">
                    <NavLink to='/bookings' className="nav-header__inner">
                        <span className="visually-hidden">Bookings</span>
                        <img src="/assets/images/briefcase.svg" alt=" icon" />
                    </NavLink>
                    {/* <a href="./bookings.html" className="nav-header__inner">
                        <span className="visually-hidden">Bookings</span>
                        <img src="./assets/images/briefcase.svg" alt=" icon" />
                    </a> */}
                </li>
                <li className="nav-header__item" title="Profile">
                    <div className="nav-header__inner profile-nav" tabIndex="0">
                        <span className="visually-hidden">Profile</span>
                        <img src="/assets/images/user.svg" alt="profile icon" />
                        <ul className="profile-nav__list">
                            <li className="profile-nav__item profile-nav__username">John Doe</li>
                            <li className="profile-nav__item">
                                <button className="profile-nav__sign-out button" onClick={routeChange}>Sign Out</button>
                           </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;