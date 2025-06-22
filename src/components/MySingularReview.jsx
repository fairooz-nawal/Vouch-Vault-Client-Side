import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'
import { AuthProvider } from './ContextAPI';
const MySingularReview = ({ eachReview }) => {
    const { reviews, setReviews } = useContext(AuthProvider);
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
    console.log(eachReview)
    const { addedDate, image, rating, review, _id, serviceTitle } = eachReview
    return (
        <div className="max-w-full md:max-w-5xl mx-auto p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg shadow-lg mb-3 bg-sky-400 text-white">
                <div className="bg-white flex items-center justify-center shadow-lg">
                    <img
                        src={image}
                        className="w-8/12 md:w-[150px] mx-auto rounded-lg shadow-2xl"
                    />
                </div>
                <div className='md:col-span-4'>
                    <h1 className="text-2xl font-bold">{serviceTitle}</h1>
                    <p className="text-xl">
                        {review}
                    </p>
                    <p className="text-sm text-gray-200">
                        Added on: {addedDate}
                    </p>
                    <Rating
                        style={{ maxWidth: 180, backgroundColor: 'white', borderRadius: '10px' }}
                        value={rating}
                        isRequired
                    /> <br />
                    <button className="btn btn-success text-white hover:text-green-600 hover:bg-white">Update</button>
                    <button onClick = {() => handleDelete(_id)} className="btn bg-red-500 text-white hover:bg-white hover:text-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MySingularReview;