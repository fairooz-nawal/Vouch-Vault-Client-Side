import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,updateProfile,signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.config'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

export const AuthProvider = createContext(null);

const ContextAPI = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
     const [user, setUser] = useState(null);
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

    const updateUser = (userDetail) => {
        return updateProfile(auth.currentUser, userDetail)
    }

    const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  }

     useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

    const info = {
        signUpUser, loading, signInUser, signUpWithGoogle,updateUser,user,signOutUser
    }
    return (
        <AuthProvider.Provider value={info}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextAPI;