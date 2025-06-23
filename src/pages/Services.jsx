import React from 'react';
import { useLoaderData } from 'react-router';
import SingleServiceall from '../components/SingleServiceall';
import { motion } from 'framer-motion';  
import { Helmet } from 'react-helmet';
const Services = () => {
    const allservices = useLoaderData();
    console.log(allservices);

    return (
        <div className='max-w-full md:max-w-7xl mx-auto my-[100px]'>
             <Helmet>
                <title>All Services</title> 
            </Helmet>
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px] p-5"
                initial={{ opacity: 0 }}  
                animate={{ opacity: 1 }}  
                transition={{ duration: 0.5 }}
            >
                {
                    allservices.map((service, index) => (
                        <motion.div
                            key={service._id}
                            initial={{ opacity: 0, y: 50 }}  
                            animate={{ opacity: 1, y: 0 }}    
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,   
                                type: 'spring',
                                stiffness: 120,        
                            }}
                        >
                            <SingleServiceall service={service} />
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    );
};

export default Services;
