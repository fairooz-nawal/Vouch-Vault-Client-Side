import React, { use } from 'react';
import SingleRowService from './SingleRowService';

const MySingularService = ({ servicePromise }) => {
    const Service = use(servicePromise);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="text-center bg-indigo-600 text-white">
                        <th className="py-2 px-4">No</th>
                        <th className="py-2 px-4">Company</th>
                        <th className="py-2 px-4">Logo</th>
                        <th className="py-2 px-4">Job</th>
                        <th className="py-2 px-4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Service.map((eachService, index) => (
                        <SingleRowService key={eachService._id} index={index} eachService={eachService} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MySingularService;


