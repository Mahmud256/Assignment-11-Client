import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../../components/Header/Navbar';
import Footer from '../Footer/Footer';
import AssignmentsCards from './AssignmentsCards';
import Pagination from '../Pagination/Pagination';

const Assignments = () => {
    const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState(loadedAssignments);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const { user } = useContext(AuthContext);
    //const [rassignments, rsetAssignments] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const assignmentsPerPage = 6;

    const url = `https://assignment-11-server-six-mocha.vercel.app/assignment?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAssignments(data))
            .catch((error) => console.error("Error fetching data: ", error));
    }, [url]);

    const handleRemove = (_id) => {
        const assignmentToDelete = assignments.find((assignment) => assignment._id === _id);

        if (assignmentToDelete && assignmentToDelete.creator === user?.email) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://assignment-11-server-six-mocha.vercel.app/assignment/${_id}`, {
                        method: 'DELETE',
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.deletedCount > 0) {
                                Swal.fire('Deleted!', 'Your Assignment has been deleted.', 'success');
                                const remaining = assignments.filter((assignment) => assignment._id !== _id);
                                setAssignments(remaining);
                            }
                        });
                }
            });
        } else {
            Swal.fire('Access Denied', 'You do not have permission to delete this assignment.', 'error');
        }
    }

    const handleDifficultyChange = (event) => {
        setSelectedDifficulty(event.target.value);
    }

    const filteredAssignments = assignments.filter((assignment) => {
        if (selectedDifficulty === 'all') {
            return true;
        } else {
            return assignment.assignmentLevel === selectedDifficulty;
        }
    });

    const indexOfLastAssignment = currentPage * assignmentsPerPage;
    const indexOfFirstAssignment = indexOfLastAssignment - assignmentsPerPage;
    const displayedAssignments = filteredAssignments.slice(indexOfFirstAssignment, indexOfLastAssignment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <Navbar />
            <div className='max-w-[1300px] mx-auto'>

                {/* Input field for selecting difficulty level */}
                <div className="text-center mt-4 flex flex-col items-center">
                    <label htmlFor="difficultySelect" className="block text-gray-700 text-sm font-bold mb-2">
                        Select Difficulty:
                    </label>
                    <select
                        id="difficultySelect"
                        value={selectedDifficulty}
                        onChange={handleDifficultyChange}
                        className="w-40 p-2 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:outline-none text-gray-700"
                    >
                        <option value="all">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                {filteredAssignments.length > 0 ? (
                    <div className="flex justify-around py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {displayedAssignments.map((assignment) => (
                                <AssignmentsCards
                                    key={assignment._id}
                                    assignment={assignment}
                                    assignments={assignments}
                                    setAssignments={setAssignments}
                                    handleRemove={handleRemove}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
            <Pagination
                totalAssignments={filteredAssignments.length}
                assignmentsPerPage={assignmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            <Footer />
        </div>
    );
};

export default Assignments;
