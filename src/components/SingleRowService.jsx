import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './ContextAPI';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import useApplicationAPI from './hooks/useApplicationAPI';

const SingleRowService = ({ eachService, index }) => {
    const { user, services, setServices } = useContext(AuthProvider);
    const { _id, serviceImage, serviceTitle, companyName, website, description, category, price } = eachService;
    const { updateService, deleteService } = useApplicationAPI();
    const [date, setDate] = useState('');
    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate.toISOString().split('T')[0]);
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(id)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Service has been deleted.",
                                icon: "success",
                                draggable: true,
                            });
                            const remainingServices = services.filter(r => r._id !== id);
                            setServices(remainingServices);
                            window.location.reload();
                        }
                    })
                    .catch(err => {
                        console.error("Error while deleting service:", err);
                        Swal.fire({
                            title: "Error",
                            text: "Could not delete the service. Please try again.",
                            icon: "error",
                        });
                    });
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const serviceData = Object.fromEntries(formData.entries());
        console.log(serviceData, _id);
        updateService(_id,{ ...serviceData, addedDate: date, userEmail: user?.email })
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Service has been Updated.",
                        icon: "success",
                        draggable: true,
                    }).then(() => {
                        form.reset();
                        window.location.reload();
                        document.getElementById(`my_modal_${_id}`).checked = false;
                    });
                }
            })
    };

    return (
        <motion.tr
            className="text-center border-b hover:bg-gray-100 transition duration-200 text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <td className="py-4 px-4">{index + 1}</td>
            <td className="py-4 px-4 font-medium">{companyName}</td>
            <td className="py-4 px-4">
                <div className="flex justify-center">
                    <img className="w-12 h-12 rounded-full" src={serviceImage} alt={companyName} />
                </div>
            </td>
            <td className="py-4 px-4">{serviceTitle}</td>
            <td className="py-4 px-4 space-x-2">
                <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white hover:bg-red-700 transition duration-300">
                    Delete
                </button>
                <label htmlFor={`my_modal_${_id}`} className="btn btn-primary" type="button">Update</label>

                {/* Modal */}
                <input type="checkbox" id={`my_modal_${_id}`} className="modal-toggle" />
                <UpdateModal
                    serviceImage={serviceImage}
                    serviceTitle={serviceTitle}
                    companyName={companyName}
                    website={website}
                    description={description}
                    category={category}
                    price={price}
                    handleSubmit={handleSubmit}
                />
            </td>
        </motion.tr>
    );
};

const UpdateModal = ({ serviceImage, serviceTitle, companyName, website, description, category, price, handleSubmit }) => {
    return (
        <motion.div
            className="modal z-5"
            role="dialog"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
        >
            <div className="modal-box bg-base-200 text-black">
                <div className="hero-content flex-col rounded-2xl">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Update Your Review</h1>
                    </div>

                    <div className="card bg-base-200 border-2 border-amber-300 w-full max-w-md shadow-2xl">
                        <div className="card-body space-y-2">
                            <form onSubmit={handleSubmit}>
                                <label className="label text-lg">Service Image</label>
                                <input type="text" className="input w-full" name="serviceImage" defaultValue={serviceImage} placeholder="Enter photo" />
                                <label className="label text-lg">Service Title</label>
                                <input type="text" className="input w-full" name="serviceTitle" defaultValue={serviceTitle} placeholder="Enter title" />
                                <label className="label text-lg">Company Name</label>
                                <input type="text" className="input w-full" name="companyName" defaultValue={companyName} placeholder="Enter Company" />
                                <label className="label text-lg">Website</label>
                                <input type="text" className="input w-full" name="website" defaultValue={website} placeholder="Enter Website" />
                                <label className="label text-lg">Description</label>
                                <input type="text" className="input w-full" name="description" defaultValue={description} placeholder="Enter description" />
                                <label className="label text-lg">Category</label>
                                <input type="text" className="input w-full" name="category" defaultValue={category} placeholder="Enter category" />
                                <label className="label text-lg">Price</label>
                                <input type="text" className="input w-full" name="price" defaultValue={price} placeholder="Enter price" />

                                <button className="btn btn-neutral mt-4">Update Service</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SingleRowService;
