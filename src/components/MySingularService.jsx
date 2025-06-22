import React, { use } from 'react';
import SingleRowService from './SingleRowService';
const MySingularService = ({servicePromise}) => {
    const Service = use(servicePromise);
    console.log(Service.length);
    return (
        <table className="max-w-full md:max-w-7xl">
            {/* head */}
            <thead>
                <tr className='text-center'>
                    <th className='w-1/5'>No</th>
                    <th className='w-1/5 md:w-1/4'>Name</th>
                    <th className='w-1/5 md:w-1/4'>Logo</th>
                    <th className='w-1/5 md:w-1/4'>Job</th>
                    <th className='w-1/5 md:w-2/3'>Actions</th>
                </tr>
            </thead>
            <tbody>
                   {
                    Service.map((eachService,index)=> <SingleRowService key={eachService._id} index={index} eachService={eachService} ></SingleRowService>)
              }
            </tbody>
        </table>

    );
};

export default MySingularService;

