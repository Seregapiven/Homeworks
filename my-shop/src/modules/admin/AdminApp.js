import { Box } from '@mui/material';
import LeftNav from './common/components/LeftNav';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../common/auth/components/ProtectedRoute';
import React from 'react';
import TopBar from './common/components/TopBar';

function AdminApp() {
    return (
        <ProtectedRoute roles={['admin', 'sales']}>
            <TopBar />
            <LeftNav />
            <Box maxWidth="lg" sx={{ mt: 10 }}>
                <Outlet />
            </Box>
        </ProtectedRoute>
    );
}

export default AdminApp;