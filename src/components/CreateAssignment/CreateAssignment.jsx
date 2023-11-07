import React, { useContext, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../Header/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider';

const CreateAssignment = () => {
    const [dueDate, setDueDate] = useState(new Date());
    const { user } = useContext(AuthContext);

    const handleCreateAssignment = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const assignmentLevel = form.assignmentLevel.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const product_img = form.photo.value;

        // Format the dueDate as "YYYY-MM-DD"
        const formattedDueDate = dueDate.toISOString().split('T')[0];

        const c_assignment = { title, assignmentLevel, marks, dueDate: formattedDueDate, description, product_img };
        console.log(c_assignment);

        // Send data to the server
        const userEmail = user?.email;

        // Make the POST request with 'userEmail' as a query parameter
        fetch('http://localhost:5000/assignment?email=' + userEmail, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(c_assignment), // 'assignmentData' should contain your assignment data
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Create Assignment Success', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }
            });
    };

    const handleDateSelect = (date) => {
        setDueDate(date);
    };

    return (
        <div>
            <ToastContainer />
            <Navbar />
            <div className='bg-[#331f64] p-4'>
                <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-lg">
                    <div className=''>
                        <h2 className='text-2xl font-extrabold text-center'>Create Assignment</h2>
                    </div>
                    <form onSubmit={handleCreateAssignment}>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input
                                type="url"
                                id="photo"
                                name="photo"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Photo URL"
                            />
                        </div>
                        <div className='flex gap-5'>
                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Assignment Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="Enter Assignment Title"
                                    />
                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Assignment Marks</label>
                                    <input
                                        type="number"
                                        id="marks"
                                        name="marks"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                        placeholder="Enter Assignment Marks"
                                    />
                                </div>
                            </div>

                            <div className='w-[50%]'>
                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Assignment Level</label>
                                    <select
                                        id="assignmentLevel"
                                        name="assignmentLevel"
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Assignment Due Date</label>
                                    <DatePicker
                                        selected={dueDate}
                                        onChange={handleDateSelect}
                                        dateFormat='dd/MM/yyyy'
                                        showTimeSelect={false}
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                        placeholderText="Select Due Date"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Description:</label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                placeholder="Enter Short Description"
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Create Assignment"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignment;
