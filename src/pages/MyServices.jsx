import React, { Suspense, useContext } from 'react';
import MySingularService from '../components/MySingularService';
import { AuthProvider } from '../components/ContextAPI';
import { Helmet } from 'react-helmet';
import useApplicationAPI from '../components/hooks/useApplicationAPI';

const MyServices = () => {
    const { user } = useContext(AuthProvider);
    const {servicePromise} = useApplicationAPI();
    return (
        <div className="min-h-screen flex flex-col mt-[100px]">
             <Helmet>
                <title>My Services</title> 
            </Helmet>
            <div className="flex-grow">
                <Suspense fallback={<div className="text-center py-20"><progress className="progress w-56"></progress></div>}>
                    <MySingularService servicePromise={servicePromise(user?.email)} />
                </Suspense>
            </div>
        </div>
    );
};

export default MyServices;
