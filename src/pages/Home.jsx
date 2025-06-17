import React from 'react';
import Banner from '../components/Banner';
import OurPartner from '../components/OurPartner'
import Ready from '../components/Ready';
import Subscription from '../components/Subscription';
import ServiceContainer from '../components/ServiceContainer';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ServiceContainer></ServiceContainer>
            <OurPartner></OurPartner>
            <Ready></Ready>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;