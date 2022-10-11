import Nav from "./nav";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Nav />
                <p className="copyright">All rights reserved { new Date().getFullYear() }</p>
            </div>
        </footer>
    );
}

export default Footer;