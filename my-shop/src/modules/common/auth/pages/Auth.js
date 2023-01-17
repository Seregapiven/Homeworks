import { Outlet } from 'react-router-dom';
import React from 'react';

function Auth() {
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Auth;