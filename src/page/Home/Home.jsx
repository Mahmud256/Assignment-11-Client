import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import Features from '../Features/Features';
import FaqData from '../FAQ/FaqData';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';



const Home = () => {
    const faqData = FaqData();
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Features></Features>
            <Faq faqData={faqData} />
            <Footer></Footer>
        </div>
    );
};

export default Home;