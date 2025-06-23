import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,updateProfile,signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.config'
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
export const AuthProvider = createContext(null);

const ContextAPI = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(()=>{
      fetch('http://localhost:3000/allServices')
      .then(res => res.json())
      .then(data => {
        setReviews(data);
      })
    },[])
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

  const handleDelete = (id) => {
   
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/reviews/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success",
                                draggable: true
                            });
                            const remainingRecipes = reviews.filter(r => r._id !== id);
                            setReviews(remainingRecipes);
                            window.location.reload();
                        }

                    })
                    .catch(err => {
                        console.error("Error while deleting recipe:", err);
                        Swal.fire({
                            title: "Error",
                            text: "Could not delete the recipe. Please try again.",
                            icon: "error"
                        });
                    });
            }
        }
        )
    };

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
        signUpUser, loading, signInUser, signUpWithGoogle,updateUser,user,signOutUser,reviews,setReviews,services, setServices,handleDelete
    }
    return (
        <AuthProvider.Provider value={info}>
            {children}
        </AuthProvider.Provider>
    );
};

export default ContextAPI;