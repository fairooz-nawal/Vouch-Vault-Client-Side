import React from 'react';

const SingleRowService = ({eachService,index}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td className='text-center'>{eachService?.companyName}</td>
            <td className='flex justify-center'><div className=""><img className='w-[50px] h-[50px]' src={eachService?.serviceImage}></img></div></td>
            <td className='text-center'>{eachService?.serviceTitle}</td>
            <td className='text-center'>
                <button className='btn bg-green-700 text-white hover:bg-white hover:text-green-700'>Update</button>
                <button className='btn bg-red-700 text-white hover:bg-white hover:text-red-700'>Delete</button>
            </td>
        </tr>
    );
};

export default SingleRowService;