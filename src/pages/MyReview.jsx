import React, { Suspense, useContext } from 'react';
import { AuthProvider } from '../components/ContextAPI';
import { reviewPromise } from '../components/API/ReviewApi';
import MySingularReviewContainer from '../components/MySingularReviewContainer';
const MyReview = () => {
    const {user} = useContext(AuthProvider);
    return (
        <div>
            <Suspense fallback={<div className="text-center py-20"><progress className="progress w-56"></progress></div>}>
            <MySingularReviewContainer reviewPromise = {reviewPromise(user?.email)}></MySingularReviewContainer>
            </Suspense>
        </div>
    );
};

export default MyReview;