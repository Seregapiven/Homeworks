// import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import ProductsTable from '../components/ProductsTable';
import { Outlet } from 'react-router-dom';
import React from 'react';

function ProductsList() {
    return (
        <>
            <ProductsTable />
            <Outlet />
        </>
    );
}

export default ProductsList;