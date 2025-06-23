import React, { useContext, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2'
import { AuthProvider } from './ContextAPI';
const MySingularReview = ({ eachReview }) => {
    const { user, handleDelete } = useContext(AuthProvider);
    const [date, setDate] = useState('');
    const [newrating, setRating] = useState(0);
    const {addedDate, rating, image, review, _id, serviceTitle, userEmail, serviceId } = eachReview;


    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate.toISOString().split('T')[0]);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.message.value;
        const serviceTitle = form.serviceTitle.value;
        const serviceId = form.serviceId.value;
        console.log(newrating);
        const doc = { review, serviceTitle, serviceId, rating: newrating, image: user?.photoURL, addedDate: date, userEmail: user?.email }
        console.log(doc);

        fetch(`http://localhost:3000/reviews/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(doc),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                   form.reset();
                    window.location.reload();
                    document.getElementById(`my_modal_${_id}`).checked = false;
                }
            })
    }

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
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white hover:bg-white hover:text-red-500">Delete</button>

                    <label htmlFor={`my_modal_${_id}`} className="btn btn-primary" type="button">Update</label>

                    {/* Put this part before </body> tag */}
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
        </div>
    );
};

const UpdateModal = ({ rating, setRating, review, serviceId, serviceTitle, handleSubmit }) => {
    return (
        <div className="modal z-5" role="dialog">
            <div className="modal-box bg-base-200 text-black">
                <div className="hero-content flex-col rounded-2xl">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold">Update Your Review</h1>
                    </div>

                    <div className="card bg-base-200 border-2 border-amber-300 w-full max-w-md shadow-2xl">
                        <div className="card-body space-y-2">
                            <form onSubmit={handleSubmit} className="mt-5">
                                <span>Service ID</span>
                                <input type="text" class="input input-lg" name='serviceId' disabled="true" defaultValue={serviceId} /><br />
                                <span>Service Title</span>
                                <input type="text" class="input input-lg" name='serviceTitle' disabled="true" defaultValue={serviceTitle} />
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
        </div>)
}

export default MySingularReview;