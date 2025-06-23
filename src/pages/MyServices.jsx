import React, { Suspense, useContext } from 'react';
import MySingularService from '../components/MySingularService';
import { AuthProvider } from '../components/ContextAPI';
import { servicePromise } from '../components/API/ServiceApi';

const MyServices = () => {
    const { user } = useContext(AuthProvider);
    return (
        <div className="min-h-screen flex flex-col">
            {/* Add a flex container to fill the screen */}
            <div className="flex-grow">
                <Suspense fallback={<div className="text-center py-20"><progress className="progress w-56"></progress></div>}>
                    <MySingularService servicePromise={servicePromise(user?.email)} />
                </Suspense>
            </div>
        </div>
    );
};

export default MyServices;
