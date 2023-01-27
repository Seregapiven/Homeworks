import { NavLink, Outlet } from 'react-router-dom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
import { IconButton } from '@mui/material';
import React from 'react';

function Categories() {
    return (
        <CategoriesProvider>
            <Outlet />
            <IconButton component={NavLink} to="new">
                <AddCircleOutlineIcon />
            </IconButton>
        </CategoriesProvider>
    );
}

export default Categories;