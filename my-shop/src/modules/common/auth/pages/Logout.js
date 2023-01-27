import { Avatar, Box, Button, Typography } from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ProtectedRoute from '../components/ProtectedRoute';
import React from 'react';
import useAuth from '../hooks/useAuth';

function Logout() {
    const { logout } = useAuth();

    return (
        <ProtectedRoute>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Out
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={logout}
                    >
                        Sign Out
                    </Button>
                </Box>
            </Box>
        </ProtectedRoute>
    );
}

export default Logout;