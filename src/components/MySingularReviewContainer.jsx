import React, { use } from 'react';
import MySingularReview from './MySingularReview';

const MySingularReviewContainer = ({reviewPromise}) => {
    const allReviews = use(reviewPromise);
    console.log(allReviews.length)
    return (
        <div>
            {
                allReviews.map((eachReview) => <MySingularReview eachReview={eachReview}></MySingularReview>)
            }
        </div>
    );
};

export default MySingularReviewContainer;