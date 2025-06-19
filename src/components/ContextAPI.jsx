import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import auth from '../Firebase/Firebase.config'

export const AuthProvider = createContext(null);

const ContextAPI = ({ children }) => {
    auth
    const [loading, setLoading] = useState(true);
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

    const info = {
        signUpUser,loading,signInUser
    }
    return (
        <AuthProvider.Provider value={info}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextAPI;