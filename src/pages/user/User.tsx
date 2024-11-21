import './user.scss';
import { Single } from '../../components/index.tsx';
import { singleUser } from '../../data.ts';

const User = () => {
    return (
        <div className="user">
            <Single {...singleUser} />
        </div>
    );
};

export default User;
