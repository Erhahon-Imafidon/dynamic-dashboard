import { Link } from 'react-router-dom';
import './menu.scss';
import { menu } from '../../data.ts';

const Menu = () => {
    return (
        <section className="menu">
            {menu.map((item) => (
                <div className="item" key={item.id}>
                    <p className="title">{item.title}</p>
                    {item.listItems.map((list) => (
                        <Link className="listItem" to={list.url} key={list.id}>
                            <img src={list.icon} alt="home-icon" />
                            <span className="listItemTitle">{list.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default Menu;
