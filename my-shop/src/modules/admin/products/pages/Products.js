import { NavLink, Outlet } from 'react-router-dom';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ProductsProvider from '../../../common/products/providers/ProductsProvider';
import CategoriesProvider from '../../../common/categories/providers/CategoriesProvider';
import { IconButton } from '@mui/material';
import React from 'react';

function Products() {
    return (
        <CategoriesProvider>
        <ProductsProvider>
            <Outlet />
            <IconButton component={NavLink} to="new">
                <AddCircleOutlineIcon />
            </IconButton>
        </ProductsProvider>
        </CategoriesProvider>
    );
}

export default Products;