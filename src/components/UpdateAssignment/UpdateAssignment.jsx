import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import Navbar from '../Header/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';

const UpdateAssignment = () => {
    const [dueDate, setDueDate] = useState(new Date());

    const assignment = useLoaderData();
    const { _id, title, assignmentLevel, marks, dueDate: formattedDueDate, description, product_img } = assignment || {};

    const handleUpdateAssignment = (event) => {
        event.preventDefault();

        const form = event.target;

        const title = form.title.value;
        const assignmentLevel = form.assignmentLevel.value;
        const marks = form.marks.value;
        const description = form.description.value;
        const product_img = form.photo.value;

        // Format the dueDate as "YYYY-MM-DD"
        const formattedDueDate = dueDate.toISOString().split('T')[0];

        const updatedAssignment = { title, assignmentLevel, marks, dueDate: formattedDueDate, description, product_img };
        console.log(updatedAssignment);

        // Send data to the server
        fetch(`https://assignment-11-server-six-mocha.vercel.app/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedAssignment)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0)  {
                    toast.success('Update Assignment Success', {
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
                        <h2 className='text-2xl font-extrabold text-center'>Update Assignment</h2>
                    </div>
                    <form onSubmit={handleUpdateAssignment}>
                        <div className="mb-4 form-control">
                            <label className="label text-gray-700 font-bold mb-2">Photo URL:</label>
                            <input
                                type="url"
                                id="photo"
                                name="photo"
                                defaultValue={product_img} // Use defaultValue from assignment
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
                                        defaultValue={title} // Use defaultValue from assignment
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
                                        defaultValue={marks} // Use defaultValue from assignment
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
                                        defaultValue={assignmentLevel} // Use defaultValue from assignment
                                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                                    >
                                        <option value="easy">Easy</option>
                                        <option value="medium">Medium</option>
                                        <option value="hard">Hard</option>
                                    </select>
                                </div>

                                <div className="mb-4 form-control">
                                    <label className="label text-gray-700 font-bold mb-2">Assignment Due Date</label>
                                    <ReactDatePicker
                                        selected={dueDate}
                                        defaultValue={dueDate}
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
                            <textarea id="description" name="description" defaultValue={description} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300" placeholder="Enter Short Description"></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Update Assignment"
                            className="btn btn-block bg-yellow-700 hover:bg-green-700 text-white"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateAssignment;
