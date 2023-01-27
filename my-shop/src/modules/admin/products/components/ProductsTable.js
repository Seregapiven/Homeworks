import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import useProducts from '../../../common/products/hooks/useProducts';
import CategoryName from './CategoryName';
import { NavLink } from 'react-router-dom';


function ProductsTable() {
    const { list, removeProduct } = useProducts();
    return (
        <TableContainer sx={{ minWidth: 800 }} component={Paper}>
            <Table  aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Category</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(({ id, title, categoryId, price, description }) => (
                        <TableRow
                            key={id}
                        >
                            <TableCell>{id}</TableCell>
                            <TableCell align="right">
                                <NavLink to={'./' + id}>
                                    {title}
                                </NavLink>
                            </TableCell>
                            <TableCell align="right">
                                <CategoryName id={categoryId} />
                            </TableCell>
                            <TableCell align="right">{price}</TableCell>
                            <TableCell align="right">{description}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    color="error"
                                    onClick={() => removeProduct(id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ProductsTable;