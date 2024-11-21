import {
    DataGrid,
    GridColDef,
    GridToolbar,
    GridRenderCellParams,
} from '@mui/x-data-grid';
import './dataTable.scss';
import { View, Delete } from '../../assets/icons/index.tsx';
import { Link } from 'react-router-dom';

type DataTablePros = {
    columns: GridColDef[];
    rows: object[];
    slug?: string;
};

const DataTable = ({ columns, rows, slug }: DataTablePros) => {
    const actionColumn: GridColDef = {
        field: 'action',
        headerName: 'Action',
        renderCell: (params: GridRenderCellParams) => (
            <div className="action">
                <Link to={`/${slug}/${params.row.id}`}>
                    <img src={View} alt={'View users details'} />
                </Link>
                <div
                    className="delete"
                    onClick={() => handleDelete(params.row.id)}
                >
                    <img src={Delete} alt="delete a user" />
                </div>
            </div>
        ),
    };
    return (
        <section className="dataTable">
            <DataGrid
                className={'dataGrid'}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </section>
    );
};

export default DataTable;
