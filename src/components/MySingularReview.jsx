import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const MySingularReview = ({ eachReview }) => {
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
                    <button className="btn bg-red-500 text-white hover:bg-white hover:text-red-500">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MySingularReview;