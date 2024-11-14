import './navbar.scss';
import Logo from '../../assets/images/kode-icon-nobg.png';
import {
    Search,
    Expand,
    Settings,
    App,
    Notification,
} from '../../assets/icons/index.tsx';

const Navbar = () => {
    return (
        <section className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <span>KodeGuru</span>
            </div>
            <div className="icons">
                <img src={Search} alt="search" className="icon" />
                <img src={App} alt="app" className="icon" />
                <img src={Expand} alt="expand" className="icon" />
                <div className="notification">
                    <img src={Notification} alt="notification" />
                    <span>1</span>
                </div>
                <div className="user"></div>
                <img src={Settings} alt="" className="icon" />
            </div>
        </section>
    );
};

export default Navbar;
