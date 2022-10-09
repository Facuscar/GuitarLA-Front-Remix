import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="container bar">
                <div className="logo">
                    <img src={logo} alt="GuitarLA logo" />
                </div>
                <nav className="nav">
                    <Link to="/">Front page</Link>
                    <Link to="/about-us">About us</Link>
                    <Link to="/store">Store</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;