import React from 'react';
import { Link } from 'react-router';
const SingleServiceall = ({service}) => {
    console.log(service);
    const {_id,serviceImage, description, price, companyName,category}= service;
    return (
        <div className="card bg-lime-100 shadow-sm">
            <figure>
                <img
                    src={serviceImage}
                    className='w-full h-64 object-cover'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {companyName}
                    <div className="badge badge-secondary">{price}</div>
                </h2>
                <div className="bg-blue-200 w-[200px] rounded-full">
                    <p className='text-blue-600 font-bold p-2'>Category: {category}</p>
                </div>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/singleService/${_id}`}><button className="btn btn-primary">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceall;
