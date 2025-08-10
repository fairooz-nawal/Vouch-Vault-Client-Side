import React from 'react';
import bg from "../assets/subcription.jpg"
const Subscription = () => {
    return (
        <div className='mt-[10%] md:mt-[100px]'>
            <div className="text-center">
                <p className='text-orange-600 font-semibold text-2xl'>Subscribe to us</p>
                <h1 className=' text-2xl md:text-3xl lg:text-5xl font-bold'>Lets Connect</h1><br /><br />
            </div>
            <div className=" bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-red-600 gap-4">
                    <div className="">
                        <div className="text-center lg:text-left p-5  text-white">
                            <h1 className="text-5xl font-bold">Subscribe to Us now!</h1>
                            <p className="">
                                DROP YOUR MESSAGE
                                AND WE WILL GET BACK SOON
                            </p>
                        </div>
                        <div className=" bg-white w-11/12 lg:w-3/4 shadow-2xl rounded-2xl m-5">
                            <div className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" placeholder="Password" />
                                    <button className="btn btn-neutral mt-4">Subscribe</button>
                                </fieldset>
                            </div>
                        </div>
                    </div>
                    <div className=""><img src={bg} className='w-full object-cover h-full' alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;