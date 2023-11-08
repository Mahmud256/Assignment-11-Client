import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../Footer/Footer';


const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='pb-52 px-5 pt-3 h-full'>
                <h2 className="text-center text-2xl font-bold">About us</h2>
                <p className='text-xl'>Group Study is a platform dedicated to helping students collaborate and learn together. Our mission is to make studying more interactive and engaging by bringing students together in a virtual study environment. Whether you're preparing for exams, working on assignments, or simply looking to enhance your learning experience, Group Study provides the tools and resources you need to connect with peers, share knowledge, and achieve your academic goals.
                </p>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default About;