import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthProvider } from '../components/ContextAPI';
import { Helmet } from 'react-helmet';

const AddServices = () => {
    const { user } = useContext(AuthProvider);
    const [date, setDate] = useState('');

    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate.toISOString().split('T')[0]);
    }, []);

    const handleAddService = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const serviceData = Object.fromEntries(formData.entries());

        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...serviceData, addedDate: date, userEmail: user?.email }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Service is added Successfully!",
                        icon: "success",
                        draggable: true,
                    });
                    form.reset();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while adding the service.');
            });
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <Helmet>
                <title>Add Service</title>
            </Helmet>
            <div className="bg-white w-full max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add a New Service</h1>
                <form onSubmit={handleAddService}>
                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Service Image</label>
                        <input
                            type="text"
                            name="serviceImage"
                            placeholder="Enter image URL"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Service Title</label>
                        <input
                            type="text"
                            name="serviceTitle"
                            placeholder="Enter service title"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Company Name</label>
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Enter company name"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Website</label>
                        <input
                            type="text"
                            name="website"
                            placeholder="Enter website URL"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Enter service description"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            placeholder="Enter service category"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            name="price"
                            placeholder="Enter service price"
                            className="input w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;
