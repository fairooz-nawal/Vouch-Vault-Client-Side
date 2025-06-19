import React from 'react';
import { Rating } from '@smastrom/react-rating'
const SingleReview = ({ singleReview }) => {
    console.log(singleReview);
    const { userEmail, review, addedDate, rating } = singleReview;
    return (
        <div className="rounded-2xl bg-base-200 mb-2">
            <div className="hero-content grid grid-cols-3 md:grid-cols-7">
                <div className=" border-2 border-gray-300 rounded-2xl bg-white">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="rounded-lg w-full shadow-2xl"
                    />
                </div>
                <div className='col-span-2 md:col-span-6'>
                    <h1 className="text-2xl font-bold">{userEmail}</h1>
                    <p className="text-sm text-gray-500">
                        {addedDate}
                    </p>
                    <p className="py-2">
                        {review}
                    </p>
                    <p className="py-2">
                        <Rating
                            style={{ maxWidth: 180 }}
                            value={rating}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;