import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useApplicationAPI = () => {
    const axiosSecure = useAxiosSecure();

    // get apis
    const reviewPromise = email =>{
        return axiosSecure.get(`/reviews?email=${email}`).then(res => res.data);
    }
    const servicePromise = (email) =>{
        return axiosSecure.get(`/myservices?email=${email}`).then(res =>res.data);
    }

    // POST Requests
    const addService = (serviceData) => {
        return axiosSecure.post('/services', serviceData);
    };

    const addReview = (reviewData) => {
        return axiosSecure.post('/reviews', reviewData);
    };

    // PUT Requests
    const updateService = (id, updatedData) => {
        return axiosSecure.put(`/allservices/${id}`, updatedData);
    };

    const updateReview = (id, updatedData) => {
        return axiosSecure.put(`/reviews/${id}`, updatedData);
    };

    // DELETE Requests
    const deleteService = (id) => {
        return axiosSecure.delete(`/allservices/${id}`);
    };

    const deleteReview = (id) => {
        return axiosSecure.delete(`/reviews/${id}`);
    };

    return {
        reviewPromise, servicePromise, addService, addReview, updateService, updateReview, deleteService, deleteReview

    };
};

export default useApplicationAPI;