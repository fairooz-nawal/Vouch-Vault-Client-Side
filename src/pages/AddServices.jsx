import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthProvider } from '../components/ContextAPI';
const AddServices = () => {
    const {user} = useContext(AuthProvider);
    console.log(user);
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

        console.log(serviceData);
        fetch('http://localhost:3000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...serviceData, addedDate: date, userEmail: user?.email}),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Service is added Successfully!",
                        icon: "success",
                        draggable: true
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
    }
    return (
        <div className=" bg-base-200 min-h-screen">
            <div className="py-[100px] p-5">
                <div className="bg-base-100 w-full max-w-full md:max-w-4xl mx-auto ">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Add Service here</h1>
                        <form onSubmit={handleAddService}>
                            <label className="label text-lg">Service Image</label>
                            <input type="text" className="input w-full" name="serviceImage" placeholder="Enter photo" />
                            <label className="label text-lg">Service Title</label>
                            <input type="text" className="input w-full" name="serviceTitle" placeholder="Enter photo" />
                            <label className="label text-lg">Company Name</label>
                            <input type="text" className="input w-full" name="companyName" placeholder="Enter Company" />
                            <label className="label text-lg">Website</label>
                            <input type="text" className="input w-full" name="website" placeholder="Enter Website" />
                            <label className="label text-lg">Description</label>
                            <input type="text" className="input w-full" name="description" placeholder="Enter description" />
                            <label className="label text-lg">Category</label>
                            <input type="text" className="input w-full" name="category" placeholder="Enter category" />
                            <label className="label text-lg">Price</label>
                            <input type="text" className="input w-full" name="price" placeholder="Enter price" />

                            <button className="btn btn-neutral mt-4">Add Service</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddServices;