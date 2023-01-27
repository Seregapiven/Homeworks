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
import useCategories from '../../../common/categories/hooks/useCategories';

function CategoriesTable() {
    const { list, removeCategory } = useCategories();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Category Name</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map(({ id, title }) => (
                        <TableRow
                            key={id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {id}
                            </TableCell>
                            <TableCell align="right">{title}</TableCell>
                            <TableCell align="right">
                                <IconButton
                                    color="error"
                                    onClick={() => removeCategory(id)}
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

export default CategoriesTable;