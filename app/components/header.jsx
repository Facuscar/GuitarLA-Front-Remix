import { Link, useLocation } from '@remix-run/react';
import logo from '../../public/img/logo.svg';

const Header = () => {

    const location = useLocation();
    console.log(location);

    return (
        <header className="header">
            <div className="container bar">
                <div className="logo">
                    <img src={logo} alt="GuitarLA logo" />
                </div>
                <nav className="nav">
                    <Link to="/" className={location.pathname === '/' && 'active'}>Front page</Link>
                    <Link to="/about-us" className={location.pathname === '/about-us' && 'active'}>About us</Link>
                    <Link to="/store" className={location.pathname === '/store' && 'active'}>Store</Link>
                    <Link to="blog" className={location.pathname === '/blog' && 'active'}>Blog</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;