import React from 'react';
import { useLoaderData } from 'react-router';
import SingleServiceall from '../components/SingleServiceall';

const Services = () => {
    const allservices = useLoaderData();
    console.log(allservices);
    return (
        <div className='max-w-full md:max-w-7xl mx-auto my-[100px]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px] p-5">
                {
                    allservices.map(service => <SingleServiceall key={service._id} service={service}></SingleServiceall>)
                }
            </div>
        </div>
    );
};

export default Services;