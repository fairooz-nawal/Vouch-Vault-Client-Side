import React from 'react';
import { useLoaderData } from 'react-router';
import SingleService from './SingleService';

const ServiceContainer = () => {
    const services = useLoaderData();
    return (
        <div className='max-w-full md:max-w-7xl mx-auto mt-[100px]'>
             <p className='text-orange-600 font-semibold text-2xl text-center'>Our Featured Services</p>
             <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center'>Our Services</h1><br /><br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    services.map(singleService => <SingleService key={singleService._id} singleService={singleService}></SingleService>)
                }
            </div>

        </div>
    );
};

export default ServiceContainer;