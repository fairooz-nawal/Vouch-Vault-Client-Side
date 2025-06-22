import React, { useContext } from 'react';
import { AuthProvider } from './ContextAPI';
import Swal from 'sweetalert2'
const SingleRowService = ({eachService,index}) => {
    const {services, setServices} = useContext(AuthProvider);
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
                                    draggable: true
                                });
                                const remainingRecipes = services.filter(r => r._id !== id);
                                setServices(remainingRecipes);
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
    return (
        <tr>
            <th>{index+1}</th>
            <td className='text-center'>{eachService?.companyName}</td>
            <td className='flex justify-center'><div className=""><img className='w-[50px] h-[50px]' src={eachService?.serviceImage}></img></div></td>
            <td className='text-center'>{eachService?.serviceTitle}</td>
            <td className='text-center'>
                <button className='btn bg-green-700 text-white hover:bg-white hover:text-green-700'>Update</button>
                <button onClick = {() => handleDelete(eachService?._id)}  className='btn bg-red-700 text-white hover:bg-white hover:text-red-700'>Delete</button>
            </td>
        </tr>
    );
};

export default SingleRowService;