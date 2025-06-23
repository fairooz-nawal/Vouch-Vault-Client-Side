import React from 'react';
import { useLoaderData } from 'react-router';
import SingleService from './SingleService';
import { motion } from 'framer-motion';

const ServiceContainer = () => {
    const services = useLoaderData();

    return (
        <div className='max-w-full md:max-w-7xl mx-auto mt-[100px]'>
            <p className='text-orange-600 font-semibold text-2xl text-center'>Our Featured Services</p>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold text-center'>Our Services</h1><br /><br />
            
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {services.map((singleService, index) => (
                    <motion.div
                        key={singleService._id} // Use unique key to reset animation
                        initial={{ opacity: 0, y: 50 }} 
                        whileInView={{
                            opacity: 1,
                            y: 0,  
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2 + index * 0.1,
                            type: "spring",
                            stiffness: 120,
                        }}
                        viewport={{ once: false, amount: 0.2 }}  // Trigger every time the element is visible
                    >
                        <SingleService singleService={singleService} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ServiceContainer;
