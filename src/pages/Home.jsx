import React from 'react';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';

const Home = () => {
    return (
        <div className="overflow-x-hidden max-w-full">
            <Hero />
            <TrustSection />
        </div>
    );
};

export default Home;
