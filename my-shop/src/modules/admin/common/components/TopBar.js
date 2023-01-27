import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../common/auth/hooks/useUser';

function TopBar() {
    const user = useUser();
    return (
        <AppBar position="absolute">
            <Toolbar
                sx={{
                    pl: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                    component="h1"
                    variant="h5"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                </Typography>
                <div sx={{ flexGrow: 1 }}></div>
                <Typography variant="h6">{user.name}</Typography>
                <IconButton
                    color="inherit"
                    component={NavLink}
                    to="/auth/logout"
                >
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;