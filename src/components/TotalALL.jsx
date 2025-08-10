import React from 'react';
import CountUp from 'react-countup';
const TotalALL = () => {

    return (
        <div className='max-w-full md:max-w-8xl mx-auto p-4'>
             <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">Statistics</h1>
            <div className="grid grid-cols-3 text-white border-2 border-gray-300 rounded-2xl py-[50px] md:py-[50px] bg-red-500 ">
                <div className=" w-full place-items-center">
                    <div className="stat-title text-white">Total Users</div>
                    <div className="stat-value text-lg md:text-2xl text-white">
                        <CountUp start={-875.039}
                            end={1000}
                            duration={5.75} />
                    </div>
                </div>

                <div className=" w-full place-items-center">
                    <div className="stat-title text-white">Total Servicess</div>
                    <div className="stat-value text-lg md:text-2xl  text-white"><CountUp start={-875.039}
                            end={2000}
                            duration={5.75} /></div>
                </div>

                <div className=" w-full place-items-center">
                    <div className="stat-title text-white">Total Reviews</div>
                    <div className="stat-value text-lg md:text-2xl text-white"><CountUp start={-875.039}
                            end={20300}
                            duration={5.75} /></div>
                </div>
            </div>
        </div>
    );
};

export default TotalALL;