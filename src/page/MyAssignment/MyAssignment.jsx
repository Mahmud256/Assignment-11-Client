import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import MyAssignmentCards from './MyAssignmentCard';
import Navbar from '../../components/Header/Navbar';
import Pagination from '../Pagination/Pagination';
import Swal from 'sweetalert2';

const MyAssignment = () => {
    const { user } = useContext(AuthContext);
    //const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const assignmentsPerPage = 6;


    const url = `http://localhost:5000/assignment?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    const creator = data.filter(item => item.creator === user.email);
                    setAssignments(creator);
                }
            })

    }, [])

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
                    fetch(`http://localhost:5000/assignment/${_id}`, {
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
            <Navbar></Navbar>

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
                            <MyAssignmentCards
                                key={assignment._id}
                                assignment={assignment}
                                handleRemove={handleRemove}
                                setAssignments={setAssignments}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
            )}

            <Pagination
                totalAssignments={filteredAssignments.length}
                assignmentsPerPage={assignmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />

        </div>
    );
};

export default MyAssignment;