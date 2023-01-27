import { createContext, useState } from 'react';

import api from '../../../../api';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function getUser() {
        return api.get('auth/user').then(({ data }) => setUser(data));
    };

    function login(username, password) {
        return api
            .post('auth/login', {
                login: username,
                password,
            })
            .then(({ data }) => {
                window.token = data.token;
                return getUser();
            });
    };

    function logout() {
        setUser(null);
    };

    const contextValue = {
        user,
        isAuthorized: !!user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;