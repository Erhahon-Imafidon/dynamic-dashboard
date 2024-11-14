import { Outlet } from 'react-router-dom';
import { Navbar, Menu, Footer } from '../index.tsx';
import './layout.scss';

const Layout = () => {
    return (
        <main className="main">
            <Navbar />
            <div className="container">
                <div className="menuContainer">
                    <Menu />
                </div>
                <div className="contentContainer">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Layout;
