import React from 'react';
import { Link } from 'react-router';
const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <div className="max-w-lg p-5 bg-white shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
                <p className="text-xl text-gray-500 mt-3">
                    Something went wrong or the page you are looking for doesn't exist.
                </p>
                <p className="text-lg mt-5 text-gray-700">
                    Error 404 - Page Not Found
                </p>
                <Link to="/" className="mt-5 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md">
                    Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Error;
