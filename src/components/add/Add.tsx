import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import './add.scss';

type AddProps = {
    columns: GridColDef[];
    slug: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ columns, setOpen, slug }: AddProps) => {
    return (
        <div className="add">
            <div className="modal">
                <span onClick={() => setOpen(false)}>X</span>
                <h1>Add new {slug}</h1>
                <form>
                    {columns
                        .filter(
                            (item) =>
                                item.field !== 'id' && item.field !== 'avatar'
                        )
                        .map((column) => (
                            <div key={column.field}>
                                <label htmlFor={column.field}>
                                    {column.headerName}
                                </label>
                                <input
                                    type={column.type}
                                    placeholder={column.field}
                                />
                            </div>
                        ))}
                </form>
            </div>
        </div>
    );
};

export default Add;
