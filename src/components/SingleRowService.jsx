import React, { useContext } from 'react';
import { AuthProvider } from './ContextAPI';
import Swal from 'sweetalert2';

const SingleRowService = ({ eachService, index }) => {
    const { services, setServices } = useContext(AuthProvider);

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
                fetch(`http://localhost:3000/allservices/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
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

    return (
        <tr className="text-center border-b hover:bg-gray-100 transition duration-200">
            <td className="py-4 px-4">{index + 1}</td>
            <td className="py-4 px-4 font-medium">{eachService?.companyName}</td>
            <td className="py-4 px-4">
                <div className="flex justify-center">
                    <img className="w-12 h-12 rounded-full" src={eachService?.serviceImage} alt={eachService?.companyName} />
                </div>
            </td>
            <td className="py-4 px-4">{eachService?.serviceTitle}</td>
            <td className="py-4 px-4 space-x-2">
                <button className="btn bg-green-600 text-white hover:bg-green-700 transition duration-300">Update</button>
                <button onClick={() => handleDelete(eachService?._id)} className="btn bg-red-600 text-white hover:bg-red-700 transition duration-300">Delete</button>
            </td>
        </tr>
    );
};

export default SingleRowService;
