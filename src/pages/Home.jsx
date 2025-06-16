import React from 'react';
import Banner from '../components/Banner';
import OurPartner from '../components/OurPartner'
import Ready from '../components/Ready';
import Subscription from '../components/Subscription';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurPartner></OurPartner>
            <Ready></Ready>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;