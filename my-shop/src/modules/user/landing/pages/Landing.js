import { NavLink } from 'react-router-dom';
import React from 'react';
import useUser from '../../../common/auth/hooks/useUser';

function Landing() {
    const user = useUser();

    return (
        <div>
            {JSON.stringify(user)}
            Landing
            <NavLink to="/auth">Login</NavLink>
            <NavLink to="/admin">Admin Panel</NavLink>
        </div>
    );
}

export default Landing;