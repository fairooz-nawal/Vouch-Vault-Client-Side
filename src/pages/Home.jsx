import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import OurPartner from '../components/OurPartner'
import Ready from '../components/Ready';
import Subscription from '../components/Subscription';
import ServiceContainer from '../components/ServiceContainer';
import TotalALL from '../components/TotalALL';
const Home = () => {
    return (
        <div className='mx-auto'>
             <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <ServiceContainer></ServiceContainer>
            <OurPartner></OurPartner>
            <TotalALL></TotalALL>
            <Ready></Ready>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;