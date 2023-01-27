import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../common/auth/hooks/useUser';
import { Button} from '@mui/material';

function Landing() {
    const user = useUser();

    return (
        <div>
            {JSON.stringify(user)}
            Landing
            {/* <NavLink to="/auth">Login</NavLink>
            <NavLink to="/auth/logout">Logout</NavLink>
            <NavLink to="/admin">Admin Panel</NavLink> */}

            <Button
                fullWidth
                variant="contained"
                component={NavLink} to="/auth"
            >
            LOGIN
            </Button>
            <Button
                fullWidth
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
                component={NavLink} to="/auth/logout"
            >
                LOGOUT
            </Button>
            <Button
                fullWidth
                variant="contained"
                component={NavLink} to="/admin"
            >
                ADMIN PANEL
            </Button>
        </div>
    );
}

export default Landing;