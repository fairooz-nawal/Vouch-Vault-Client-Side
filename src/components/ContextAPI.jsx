import React, { createContext } from 'react';

export const AuthProvider = createContext(null);

const ContextAPI = ({ children }) => {
    const auth = {
        user:"anika"
    }
    return (
        <AuthProvider.Provider value={auth}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextAPI;