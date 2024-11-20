import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import './users.scss';
import { DataTable } from '../../components';
import Avatar from '../../assets/icons/noavatar.png';
import { userRows } from '../../data.ts';

const columns: GridColDef<(typeof userRows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params: GridRenderCellParams) => (
            <img src={params.row.img || Avatar} alt="user image" />
        ),
    },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },

    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (__value, row) =>
            `${row.firstName || ''} ${row.lastName || ''}`,
    },

    {
        field: 'email',
        headerName: 'Email',
        type: 'string',
        width: 170,
        editable: true,
    },

    {
        field: 'phone',
        headerName: 'Phone',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'createdAt',
        headerName: 'createdAt',
        type: 'number',
        width: 170,
        editable: true,
    },

    {
        field: 'verified',
        headerName: 'Verified',
        type: 'boolean',
        width: 170,
        editable: true,
    },
];

const Users = () => {
    return (
        <section className="users">
            <div className="info">
                <h1>Users</h1>
                <button>Add New User</button>
            </div>
            <DataTable columns={columns} rows={userRows} />
        </section>
    );
};

export default Users;
