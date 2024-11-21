import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';
import './products.scss';
import { DataTable, Add } from '../../components';
import Avatar from '../../assets/icons/noavatar.png';
import { products } from '../../data.ts';

const columns: GridColDef<(typeof products)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'avatar',
        headerName: 'Avatar',
        width: 100,
        renderCell: (params: GridRenderCellParams) => (
            <img src={params.row.img || Avatar} alt={'product image'} />
        ),
    },
    {
        field: 'title',
        type: 'string',
        headerName: 'Title',
        width: 250,
    },
    {
        field: 'color',
        type: 'string',
        headerName: 'Color',
        width: 150,
    },
    {
        field: 'price',
        type: 'string',
        headerName: 'Price',
        width: 200,
    },
    {
        field: 'producer',
        headerName: 'Producer',
        type: 'string',
        width: 200,
    },
    {
        field: 'createdAt',
        headerName: 'Created At',
        width: 200,
        type: 'string',
    },
    {
        field: 'inStock',
        headerName: 'In Stock',
        width: 150,
        type: 'boolean',
    },
];

const Products = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="users">
            <div className="info">
                <h1>Products</h1>
                <button onClick={() => setOpen(true)}>Add New Products</button>
            </div>
            <DataTable slug={'products'} columns={columns} rows={products} />
            {open && (
                <Add slug={'products'} columns={columns} setOpen={setOpen} />
            )}
        </section>
    );
};

export default Products;
