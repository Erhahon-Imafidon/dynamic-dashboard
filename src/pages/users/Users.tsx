import './users.scss';
import { DataTable } from '../../components';

const Users = () => {
    return (
        <section className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable />
        </section>
    );
};

export default Users;
