import './topbox.scss';
import { topDealUsers } from '../../data.ts';

const TopBox = () => {
    return (
        <div className="topBox">
            <h1>Top deals</h1>
            <div className="list">
                {topDealUsers.map((item) => (
                    <div className="listItem" key={item.id}>
                        <div className="user">
                            <img src={item.img} alt={item.username} />
                            <div className="userText">
                                <p className="username">{item.username}</p>
                                <p className="email">{item.email}</p>
                            </div>
                        </div>
                        <p className="amount">{item.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBox;
