import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import React from 'react';

function AdminApp() {
    return (
        <div>
            <ProtectedRoute roles={['admin', 'sales']}>
                <Outlet />
            </ProtectedRoute>
        </div>
    );
}

export default AdminApp;