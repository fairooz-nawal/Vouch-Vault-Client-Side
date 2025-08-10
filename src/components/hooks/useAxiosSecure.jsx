import axios from 'axios';
import React, { useContext } from 'react';
import { AuthProvider } from '../ContextAPI';
import { getAuth } from "firebase/auth";
const auth = getAuth();

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000'
    baseURL: 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {user} = useContext(AuthProvider);

    axiosInstance.interceptors.request.use(async (config) =>{
        const currentUser = auth.currentUser;
    if (currentUser) {
        const token = await currentUser.getIdToken(true); // forces refresh
        config.headers.authorization = `Bearer ${token}`;
    }
    return config;
    })

    return axiosInstance;
};

export default useAxiosSecure;