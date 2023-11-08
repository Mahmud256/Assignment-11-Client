import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import MyAssignmentCards from './MyAssignmentCard';
import Navbar from '../../components/Header/Navbar';

const MyAssignment = () => {
    const { user } = useContext(AuthContext);
    //const loadedAssignments = useLoaderData();
    const [assignments, setAssignments] = useState([]);
    const url = `http://localhost:5000/assignment?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data =>{
                if (data.length > 0) {
                    const creator = data.filter(item => item.creator === user.email);
                    setAssignments(creator);
                }
            })
            
    }, [])

    return (
        <div>
            <Navbar></Navbar>

            {assignments.length > 0 ? (
            <div className="flex justify-around py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {assignments.map((assignment) => (
                        <MyAssignmentCards
                            key={assignment._id}
                            assignment={assignment}

                            setAssignments={setAssignments}
                        />
                    ))}
                </div>
            </div>
            ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}

        </div>
    );
};

export default MyAssignment;