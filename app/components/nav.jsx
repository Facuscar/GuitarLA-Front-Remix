import { Link, useLocation } from "@remix-run/react";

const Nav = () => {
    const location = useLocation();
    return (
        <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Front page</Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About us</Link>
            <Link to="/store" className={location.pathname === '/store' ? 'active' : ''}>Store</Link>
            <Link to="blog" className={location.pathname === '/blog'? 'active' : ''}>Blog</Link>
        </nav>
    );
    
}

export default Nav;