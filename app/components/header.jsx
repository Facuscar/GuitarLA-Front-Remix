import logo from '../../public/img/logo.svg';
import Nav from './nav';

const Header = () => {
    return (
        <header className="header">
            <div className="container bar">
                <div className="logo">
                    <img src={logo} alt="GuitarLA logo" />
                </div>
                <Nav />
            </div>
        </header>
    );
}

export default Header;