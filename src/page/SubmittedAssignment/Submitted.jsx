import React, { useEffect, useState } from 'react';
import SubmittedCard from './SubmittedCard';
import Navbar from '../../components/Header/Navbar';
import Footer from '../Footer/Footer';
import Pagination from '../Pagination/Pagination';

const Submitted = () => {

    const [assignments, setAssignment] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const assignmentsPerPage = 6;

    const url = 'https://assignment-11-server-six-mocha.vercel.app/submission';


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAssignment(data))
    }, [])

    const indexOfLastAssignment = currentPage * assignmentsPerPage;
    const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
    const displayedAssignments = assignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    
    return (
        <div>
            <Navbar></Navbar>
            {assignments.length > 0 ? (
            <div className="flex justify-around py-12 h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {displayedAssignments.map((assignment) => (
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
                <Pagination
                totalAssignments={assignments.length}
                assignmentsPerPage={assignmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            <Footer></Footer>
        </div>
    );
};

export default Submitted;