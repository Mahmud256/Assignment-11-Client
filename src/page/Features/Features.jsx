import React from 'react';
import { FaUser, FaTasks, FaFileAlt } from 'react-icons/fa'; // Import the icons you need from 'react-icons/fa'

const Features = () => {
    return (
        <div className='my-10 py-10'>
            <h1 className='text-3xl text-red-700 font-bold text-center py-12' data-aos="fade-up">Our Features</h1>
            <div className='lg:w-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                <div className="card lg-w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <FaUser className="text-4xl text-red-700 mb-4" /> {/* Use the FaUser icon */}
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            User Registration and Profiles
                        </h2>
                    </div>
                </div>
                <div className="card lg-w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <FaTasks className="text-4xl text-red-700 mb-4" /> {/* Use the FaTasks icon */}
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            Assignment Management
                        </h2>
                    </div>
                </div>
                <div className="card lg:w-72 bg-base-100 border shadow">
                    <div className="card-body p-4 flex flex-col items-center">
                        <FaFileAlt className="text-4xl text-red-700 mb-4" /> {/* Use the FaFileAlt icon */}
                        <h2 className="card_title text-center text-xl font-medium rounded p-2">
                            File Sharing
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
