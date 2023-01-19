import AuthProvider, {
    AuthContext,
} from './modules/common/auth/providers/AuthProvider';
import { Navigate, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import AdminApp from './modules/admin/AdminApp';
import Auth from './modules/common/auth/pages/Auth';
import Dashboard from './modules/admin/dashboard/pages/Dashboard';
import Landing from './modules/user/landing/pages/Landing';
import Login from './modules/common/auth/pages/Login';
import Logout from './modules/common/auth/pages/Logout';
import Products from './modules/user/products/pages/Products';
import Signup from './modules/common/auth/pages/Signup';
import { Container, CssBaseline } from '@mui/material';

function App() {
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Routes>
                <Route path="/" exact element={<Landing />} />
                <Route path="/shop" element={<Products />} />
                <Route path="/auth" element={<Auth />}>
                    <Route path="" element={<Navigate to="login" />} />
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
                <Route path="admin" element={<AdminApp />}>
                    <Route path="" element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                </Route>
            </Routes>
        </Container>
    );
}

export default App;