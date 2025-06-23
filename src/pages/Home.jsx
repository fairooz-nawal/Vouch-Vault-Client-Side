import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import OurPartner from '../components/OurPartner'
import Ready from '../components/Ready';
import Subscription from '../components/Subscription';
import ServiceContainer from '../components/ServiceContainer';
const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <ServiceContainer></ServiceContainer>
            <OurPartner></OurPartner>
            <Ready></Ready>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;