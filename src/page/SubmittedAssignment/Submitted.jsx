import React, { useEffect, useState } from 'react';
import SubmittedCard from './SubmittedCard';
import Navbar from '../../components/Header/Navbar';
import Footer from '../Footer/Footer';

const Submitted = () => {

    const [assignments, setAssignment] = useState([]);

    const url = 'http://localhost:5000/submission';


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAssignment(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            {assignments.length > 0 ? (
            <div className="flex justify-around py-12 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {assignments.map((assignment) => (
                        <SubmittedCard
                            key={assignment._id}
                            assignment={assignment}

                        />
                    ))}
                </div>
            </div>
            ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            <Footer></Footer>
        </div>
    );
};

export default Submitted;