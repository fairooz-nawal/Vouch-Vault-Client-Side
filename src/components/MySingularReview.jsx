import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Swal from 'sweetalert2';
import { AuthProvider } from './ContextAPI';
import { motion } from 'framer-motion';
import useApplicationAPI from './hooks/useApplicationAPI';

const MySingularReview = ({ eachReview }) => {
    const { user, reviews, setReviews } = useContext(AuthProvider);
     const { updateReview, deleteReview } = useApplicationAPI();
    const [date, setDate] = useState('');
    const [newrating, setRating] = useState(0);
    const { addedDate, rating, image, review, _id, serviceTitle, userEmail, serviceId } = eachReview;

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
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteReview(id)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
                                icon: "success",
                                draggable: true
                            }).then(() => {
                                const remainingReviews = reviews.filter(r => r._id !== id);
                                setReviews(remainingReviews);
                            });

                        }

                    })
                    .catch(err => {
                        console.error("Error while deleting review:", err);
                        Swal.fire({
                            title: "Error",
                            text: "Could not delete the review. Please try again.",
                            icon: "error"
                        });
                    });
            }
        }
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.message.value;
        const serviceTitle = form.serviceTitle.value;
        const serviceId = form.serviceId.value;
        const doc = { review, serviceTitle, serviceId, rating: newrating, image: user?.photoURL, addedDate: date, userEmail: user?.email };

        updateReview(_id,doc)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Review has been Updated.",
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
        <motion.div
            className="max-w-full md:max-w-5xl mx-auto p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 p-4 border rounded-lg shadow-lg mb-3 bg-sky-400 text-white">
                <div className="bg-white flex items-center justify-center shadow-lg">
                    <img
                        src={image} 
                        loading='lazy'
                        className="w-8/12 md:w-[150px] mx-auto rounded-lg shadow-2xl"
                    />
                </div>
                <div className='md:col-span-4'>
                    <h1 className="text-2xl font-bold">{serviceTitle}</h1>
                    <p className="text-xl">{review}</p>
                    <p className="text-sm text-gray-200">Added on: {addedDate}</p>
                    <Rating
                        style={{ maxWidth: 180, backgroundColor: 'white', borderRadius: '10px' }}
                        value={rating}
                        isRequired
                    /> <br />
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white hover:bg-white hover:text-red-500">Delete</button>
                    <label htmlFor={`my_modal_${_id}`} className="btn btn-primary" type="button">Update</label>

                    {/* Modal Trigger */}
                    <input type="checkbox" id={`my_modal_${_id}`} className="modal-toggle" />
                    <UpdateModal
                        id={_id}
                        review={review}
                        addedDate={addedDate}
                        userEmail={userEmail}
                        image={image}
                        rating={newrating}
                        setRating={setRating}
                        serviceId={serviceId}
                        serviceTitle={serviceTitle}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </motion.div>
    );
};

const UpdateModal = ({ rating, setRating, review, serviceId, serviceTitle, handleSubmit }) => {
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
                            <form onSubmit={handleSubmit} className="mt-5">
                                <span>Service ID</span>
                                <input type="text" className="input input-lg" name='serviceId' disabled="true" defaultValue={serviceId} /><br />
                                <span>Service Title</span>
                                <input type="text" className="input input-lg" name='serviceTitle' disabled="true" defaultValue={serviceTitle} />
                                <p>Review</p>
                                <textarea
                                    className="textarea textarea-bordered w-full h-32"
                                    name="message"
                                    defaultValue={review}
                                    placeholder="Write your message here..."
                                ></textarea>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={rating}
                                    onChange={setRating}
                                    isRequired
                                />
                                <button className="btn btn-primary mt-3">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default MySingularReview;
