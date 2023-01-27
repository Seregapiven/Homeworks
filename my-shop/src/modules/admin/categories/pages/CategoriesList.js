import CategoriesTable from '../components/CategoriesTable';
import { Outlet } from 'react-router-dom';
import React from 'react';

function CategoriesList() {
    return (
        <>
            <CategoriesTable />
            <Outlet />
        </>
    );
}

export default CategoriesList;