import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import Features from '../Features/Features';
import FAQ from '../Faq/Faq';
import FaqData from '../FAQ/FaqData';

const Home = () => {
    const faqData = FaqData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <FAQ faqData={faqData} />
            <h2>This</h2>
        </div>
    );
};

export default Home;