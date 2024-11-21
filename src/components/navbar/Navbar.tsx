import './navbar.scss';
import Logo from '../../assets/images/Kode-icon-nobg.png';
import Kate from '../../assets/images/kate.jpg';
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
                <div className="logoImg">
                    <img src={Logo} alt="Logo" />
                </div>
                <span>kodeguru</span>
            </div>
            <div className="icons">
                <img src={Search} alt="search" className="icon" />
                <img src={App} alt="app" className="icon" />
                <img src={Expand} alt="expand" className="icon" />
                <div className="notification">
                    <img src={Notification} alt="notification" />
                    <span>1</span>
                </div>
                <div className="user">
                    <img src={Kate} alt="user" />
                    <span>Kate</span>
                </div>
                <img src={Settings} alt="" className="icon" />
            </div>
        </section>
    );
};

export default Navbar;
