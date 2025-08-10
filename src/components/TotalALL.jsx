import React from 'react';
import CountUp from 'react-countup';
const TotalALL = () => {

    return (
        <div className='w-full lg:w-[90%] mx-auto'>
            <p className='text-orange-600 font-semibold text-2xl text-center'>Statistics of our Services</p>
            <h1 className="text-2xl md:text-4xl font-bold text-center">Statistics</h1><br /><br />
            <div className="grid grid-cols-3 text-black border-2 border-gray-300 rounded-2xl py-[50px] md:py-[50px] bg-red-500 ">
                <div className=" w-full">
                    <div className="w-3/4 lg:w-1/2 h-[150px] lg:h-[100px] bg-white mx-auto rounded-2xl py-[10px] lg:py-[20px] text-center">
                        <h1 className='text-lg md:text-2xl font-bold text-red-600'>Total Users</h1>
                        <div className="text-lg md:text-2xl font-bold text-red-600">
                            <CountUp start={-875.039}
                                end={1000}
                                duration={5.75} />
                        </div>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="w-3/4 lg:w-1/2 h-[150px] lg:h-[100px] bg-white mx-auto rounded-2xl py-[10px] lg:py-[20px] text-center">
                        <h1 className='text-lg md:text-2xl font-bold text-red-600'>Total Services</h1>
                        <div className="text-lg md:text-2xl font-bold text-red-600">
                           <CountUp start={-875.039}
                        end={2000}
                        duration={5.75} />
                        </div>
                    </div>
                </div>
                <div className=" w-full">
                    <div className="w-3/4 lg:w-1/2 h-[150px] lg:h-[100px] bg-white mx-auto rounded-2xl py-[10px] lg:py-[20px] text-center">
                        <h1 className='text-lg md:text-2xl font-bold text-red-600'>Total Review</h1>
                        <div className="text-lg md:text-2xl font-bold text-red-600">
                            <CountUp start={-875.039}
                        end={20300}
                        duration={5.75} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TotalALL;