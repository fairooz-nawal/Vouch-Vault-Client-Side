import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleServiceall from '../components/SingleServiceall';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { filter } from 'motion/react-client';

const categoryromise = fetch('/category.json').then(res => res.json())
const Services = () => {
    const allcategory = use(categoryromise);
    const allservices = useLoaderData();
    const [all, setAll] = useState(true);
    const [FilteredService, setFilteredService] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // Store search term

    const handleCategory = (categorytype) => {
        const filtered = allservices.filter(service => service.category == categorytype);
        setFilteredService(filtered);
        setFilteredCategory(categorytype);
        setAll(false);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target.search.value;
        setSearchTerm(form); // Update search term state

        if (form.trim() === '') {
            // If search term is empty, reset to show all services
            setAll(true);
        } else {
            // Fetch filtered services based on search term
            try {
                fetch(`http://localhost:3000/searchservices?search=${form}`)
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setFilteredService(data);
                        setAll(false);
                    });

            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        }
    };
    return (
        <div className='max-w-full md:max-w-7xl mx-auto my-[100px]'>
            <Helmet>
                <title>All Services</title>
            </Helmet>

            {/* Search Feature */}
            <div className="mb-5 flex justify-center">
                <form onSubmit={handleSearch} className='flex'>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Search for services" name="search"
                    /> 
                    <button className='ml-3 btn btn-primary' type="submit">Search</button>
                </form>
            </div>

            {/* Category dropdown */}
            <details className="dropdown flex justify-start md:justify-center lg:justify-center">
                <summary className="btn m-1 bg-primary text-white">Select Service Type</summary>
                <ul className="text-white bg-sky-500 menu dropdown-content rounded-box z-1 w-32 p-2 shadow-sm">
                    <li onClick={() => setAll(true)} className="hover:bg-primary hover:text-white p-2 text-start">
                        All Services
                    </li>
                    {allcategory.map((category) => (
                        <li
                            onClick={() => handleCategory(category.category)}
                            key={category.id}
                            className="hover:bg-primary hover:text-white p-2 text-start"
                        >
                            {category.category}
                        </li>
                    ))}
                </ul>
            </details>

            {/* Array looping */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[100px] p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >

                {all ? (
                    allservices.map((service, index) => (
                        <motion.div
                            key={service._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 120,
                            }}
                        >
                            <SingleServiceall service={service} />
                        </motion.div>
                    ))
                ) : (
                    FilteredService.map((service, index) => (
                        <motion.div
                            key={service._id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 120,
                            }}
                        >
                            <SingleServiceall service={service} />
                        </motion.div>
                    ))
                )}
            </motion.div>
        </div>
    );
};

export default Services;
