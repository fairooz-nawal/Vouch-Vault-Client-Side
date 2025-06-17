import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetail = () => {
    const single = useLoaderData();
    console.log(single);
    const { _id, addedDate, category, companyName, description, price, serviceImage, serviceTitle, userEmail, website } = single;
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

                        {/* <button onClick={() => handleLike(singleRecipe._id)} className="btn btn-primary">Like this Recipe</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;