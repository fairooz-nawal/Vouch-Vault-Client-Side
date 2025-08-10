import React, { Suspense, useContext } from 'react';
import { AuthProvider } from '../components/ContextAPI';
import MySingularReviewContainer from '../components/MySingularReviewContainer';
import { Helmet } from 'react-helmet';
import useApplicationAPI from '../components/hooks/useApplicationAPI';
const MyReview = () => {
    const { user } = useContext(AuthProvider);
    const { reviewPromise } = useApplicationAPI();
    return (
        <div className="min-h-screen flex flex-col mt-[100px]">
            <Helmet>
                <title>My Review</title>
            </Helmet>
            <Suspense fallback={<div className="text-center py-20"><progress className="progress w-56"></progress></div>}>
                <MySingularReviewContainer reviewPromise={reviewPromise(user?.email)}></MySingularReviewContainer>
            </Suspense>
        </div>
    );
};

export default MyReview;