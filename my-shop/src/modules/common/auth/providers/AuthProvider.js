import { createContext, useState } from 'react';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    function login(username, password, role) {
        setUser({
            username,
            role,
        });
    }

    function logout() {
        setUser(null);
    }

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