import React, { useState } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import './add.scss';

type AddProps = {
    columns: GridColDef[];
    slug: string;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ columns, setOpen, slug }: AddProps) => {
    const [formData, setFormData] = useState({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log('New Data: ', formData);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setOpen(false);
        // If you have an API
        // axios.post(`api/${slug}`, formData);
    };

    return (
        <div className="add">
            <div className="modal">
                <span onClick={() => setOpen(false)}>X</span>
                <h1>Add new {slug}</h1>
                <form onSubmit={handleSubmit}>
                    {columns
                        .filter(
                            (item) =>
                                item.field !== 'id' && item.field !== 'avatar'
                        )
                        .map((column) => (
                            <div key={column.field} className="item">
                                <label htmlFor={column.field}>
                                    {column.headerName}
                                </label>
                                <input
                                    type={column.type}
                                    placeholder={column.field}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Add;
