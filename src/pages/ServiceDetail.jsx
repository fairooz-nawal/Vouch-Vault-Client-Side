import React, { use, useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2'
import SingleReview from '../components/SingleReview';
import { useContext } from 'react';
import { AuthProvider } from '../components/ContextAPI';

const reviewPromise = fetch('http://localhost:3000/reviews')
    .then(res => res.json())
const ServiceDetail = () => {
    const {user} = useContext(AuthProvider)
    const allreviewdb = use(reviewPromise);
    const single = useLoaderData();
    const { _id, addedDate, category, companyName, description, price, serviceImage, serviceTitle, userEmail, website } = single;
    const allreview = allreviewdb.filter(review => review.serviceId === _id);
    
    const [date, setDate] = useState('');
    const [rating, setRating] = useState(0);
    useEffect(() => {
        const currentDate = new Date();
        setDate(currentDate.toISOString().split('T')[0]);
    }, []);
    const handleReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.message.value;
        fetch('http://localhost:3000/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({review, addedDate: date, userEmail: user?.email, image:user?.photoURL, rating: rating, serviceId:_id, serviceTitle:serviceTitle}),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Your Review is added Successfully!",
                        icon: "success",
                        draggable: true
                    }).then(()=>{
                         form.reset();
                        window.location.reload();
                    });
                   
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
        <div className="py-[100px] bg-white">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-gray-300 rounded-2xl bg-gray-100">
                    <div className="p-5 border-2 border-gray-300 rounded-2xl bg-white">
                        <img src={serviceImage} className="w-full h-full rounded-2xl" />
                    </div>
                    <div className=' text-black p-5'>
                        <div className="bg-red-500 text-white rounded-2xl p-5 mb-5">
                            <h1 className="text-xl md:text-4xl font-bold">{serviceTitle}</h1>
                            <p className="text-xlmd:text-2xl font-bold text-amber-200">Company Name: <span className='text-white'>{companyName}</span></p>
                        </div>
                        <div className="bg-blue-500 text-white rounded-2xl p-5 mb-5">
                            <p className="font-bold text-amber-200">Category: <span className='tang text-white'>{category}</span></p>
                            <p className="font-bold text-amber-200">Website: <span className='tang text-white '>{website}</span></p>
                            <p className="font-bold text-amber-200">Date: <span className='text-white'>{addedDate}</span></p>
                        </div>

                        <div className="bg-lime-500 text-white rounded-2xl p-5 mb-5">
                            <p className="">{description}</p>
                            <p className="font-bold ">{userEmail}</p>
                        </div>
                        <div className="w-[190px] bg-black rounded-full p-2"><p className="font-bold text-white">Price: {price}</p></div>
                    </div>
                </div><br />
                <h1 className="text-xl md:text-2xl font-bold">Add Your Review Here</h1>
                <form onSubmit={handleReview} className="mt-5">
                    <textarea
                        className="textarea textarea-bordered w-full h-32"
                        name="message"
                        placeholder="Write your message here..."
                    ></textarea>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={rating}
                        onChange={setRating}
                        isRequired
                    />
                    <button className="btn btn-primary mt-3">Submit Review</button>
                </form><br />
                 <h1 className="text-xl md:text-2xl font-bold">All Reviews</h1>
                 
               {
                allreview.length === 0 ? <p className='text-white p-5 bg-red-500 font-bold rounded-2xl'>No reviews found for this service.</p> :
                allreview.map(singleReview => <SingleReview key={singleReview._id} singleReview={singleReview}></SingleReview>)
               }
            </div>
        </div>
    );
};

export default ServiceDetail;