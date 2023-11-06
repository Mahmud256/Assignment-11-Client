import { useState } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../../components/Header/Navbar';
import { useLoaderData } from 'react-router-dom';
import AssignmentsCards from './AssignmentsCards';

const Assignments = () => {
    const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadedAssignments);

    return (
        <div>
            <Navbar></Navbar>
            <div className='max-w-[1300px]  mx-auto'>
                {assignments.length > 0 ? (
                    <>
                        <div className="flex justify-around py-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {
                                    assignments.map(assignment => <AssignmentsCards key={assignment._id} assignment={assignment} assignments={assignments} setAssignments={setAssignments}></AssignmentsCards>)
                                }

                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Assignments;