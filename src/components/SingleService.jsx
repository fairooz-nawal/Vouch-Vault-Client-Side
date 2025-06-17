import React from 'react';
import { Link } from 'react-router';
const SingleService = ({singleService}) => {
    console.log(singleService);
    const {_id,serviceImage, description, price, companyName}= singleService;
    return (
        <div className="card bg-lime-100 w-96 shadow-sm">
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
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/singleService/${_id}`}><button className="btn btn-primary">See Details</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default SingleService;