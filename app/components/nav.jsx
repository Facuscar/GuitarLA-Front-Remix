import { Link, useLocation } from "@remix-run/react";
import cart from  '../../public/img/cart.png'

const Nav = () => {
    const location = useLocation();
    return (
        <nav className="nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Front page</Link>
            <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About us</Link>
            <Link to="/guitars" className={location.pathname === '/guitars' ? 'active' : ''}>Guitars</Link>
            <Link to="/blog" className={location.pathname === '/blog'? 'active' : ''}>Blog</Link>.
            <Link to="/cart" ><img src={cart} alt='Shopping cart'/></Link>
        </nav>
    );
    
}

export default Nav;