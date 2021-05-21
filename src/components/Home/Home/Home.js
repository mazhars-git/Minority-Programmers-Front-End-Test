import React from 'react';
import Events from '../Events/Events';
import Features from '../Features/Features';
import Header from '../Header/Header';
import Startup from '../Startup/Startup';

const Home = () => {
    return (
        <section className="bg-color">
            <Header></Header>
            <Features></Features>
            <Startup></Startup>
            <Events></Events>
        </section>
    );
};

export default Home;