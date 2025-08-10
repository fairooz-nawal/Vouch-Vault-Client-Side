import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import SingleServiceall from '../components/SingleServiceall';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const categoryromise = fetch('/category.json').then(res => res.json());

const Services = () => {
    const allcategory = use(categoryromise);
    const allservices = useLoaderData();

    const [all, setAll] = useState(true);
    const [FilteredService, setFilteredService] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    // Extract numeric price
    const parsePrice = (price) => {
        if (!price) return 0;
        if (price.toLowerCase() === 'free') return 0;
        const match = price.match(/\d+(\.\d+)?/); // get first number
        return match ? parseFloat(match[0]) : 0;
    };

    const sortServices = (services, order) => {
        return [...services].sort((a, b) => {
            const priceA = parsePrice(a.price);
            const priceB = parsePrice(b.price);
            return order === 'asc' ? priceA - priceB : priceB - priceA;
        });
    };

    const handleCategory = (categorytype) => {
        const filtered = allservices.filter(service => service.category === categorytype);
        setFilteredService(sortOrder ? sortServices(filtered, sortOrder) : filtered);
        setFilteredCategory(categorytype);
        setAll(false);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target.search.value;
        setSearchTerm(form);

        if (form.trim() === '') {
            setAll(true);
        } else {
            fetch(`http://localhost:3000/searchservices?search=${form}`)
                .then(res => res.json())
                .then(data => {
                    setFilteredService(sortOrder ? sortServices(data, sortOrder) : data);
                    setAll(false);
                })
                .catch(error => console.error("Error fetching search results:", error));
        }
    };

    const handleSortChange = (order) => {
        setSortOrder(order);

        if (all) {
            setFilteredService(sortServices(allservices, order));
            setAll(false); // to display sorted list
        } else {
            setFilteredService(sortServices(FilteredService, order));
        }
    };

    return (
        <div className='max-w-full md:max-w-7xl mx-auto my-[100px]'>
            <Helmet>
                <title>All Services</title>
            </Helmet>

            {/* Search */}
            <div className="mb-2 flex justify-center">
                <form onSubmit={handleSearch} className='flex'>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        placeholder="Search for services" name="search"
                    /> 
                    <button className='ml-3 btn btn-primary' type="submit">Search</button>
                </form>
            </div>

            {/* Filters: Category & Sort */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
                {/* Category dropdown */}
                <details className="dropdown">
                    <summary className="btn m-1 bg-primary text-white">Select Service Type</summary>
                    <ul className="text-white bg-sky-500 menu dropdown-content rounded-box z-1 w-40 p-2 shadow-sm">
                        <li onClick={() => { setAll(true); setSortOrder(''); }} className="hover:bg-primary hover:text-white p-2">
                            All Services
                        </li>
                        {allcategory.map((category) => (
                            <li
                                onClick={() => handleCategory(category.category)}
                                key={category.id}
                                className="hover:bg-primary hover:text-white p-2"
                            >
                                {category.category}
                            </li>
                        ))}
                    </ul>
                </details>

                {/* Sort dropdown */}
                <select
                    className="select select-bordered"
                    value={sortOrder}
                    onChange={(e) => handleSortChange(e.target.value)}
                >
                    <option value="">Sort by Price</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            {/* Service List */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[50px] p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                {(all ? allservices : FilteredService).map((service, index) => (
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
                ))}
            </motion.div>
        </div>
    );
};

export default Services;
