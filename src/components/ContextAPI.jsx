import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import auth from '../Firebase/Firebase.config'

export const AuthProvider = createContext(null);

const ContextAPI = ({ children }) => {
     const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signUpWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const info = {
        signUpUser, loading, signInUser,signUpWithGoogle
    }
    return (
        <AuthProvider.Provider value={info}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextAPI;