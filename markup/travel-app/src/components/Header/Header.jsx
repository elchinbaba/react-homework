import Logo from "./components/Logo";
import Nav from "./components/Nav";

const Header = ({ withNav }) => {
    return (
        <header className="header">
            <div className="header__inner">
                <Logo />
                {
                    withNav ?
                        <Nav /> 
                        :
                        null
                }
            </div>
        </header>
    );
};

export default Header;