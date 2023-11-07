import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../../components/Header/Navbar';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const SubmissionForm = () => {
    const { user } = useContext(AuthContext);
     const assignment = useLoaderData();
     const { title, marks } = assignment;

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const title = form.title.value;
        const email = user?.email;
        //const email = form.userEmail.value;
        const marks = form.mark.value;
        const examineeName = form.examineeName.value;
        const pdfLink = form.pdfLink.value;
        const note = form.note.value;
        const formData = {
            title: title,
            // assignment_id: _id,
            email,
            marks,
            examineeName,
            pdfLink,
            note
        }

        console.log(formData);

        // Send data to the server
        const userEmail = user?.email;

        fetch('http://localhost:5000/submission?email=' + userEmail, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment submitted successfully',
                        icon: 'success',
                    });
                }
            })
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1300px] mx-auto">
                <form onSubmit={handleSubmit} className="card bg-white border shadow rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={title}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userEmail">
                            User Email
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            name="userEmail"
                            defaultValue={user?.email}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mark">
                            Mark
                        </label>
                        <input
                            type="text"
                            id="mark"
                            name="mark"
                            defaultValue={marks}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="examineeName">
                            Examinee Name
                        </label>
                        <input
                            type="text"
                            id="examineeName"
                            name="examineeName"
                            // defaultValue={examineeName}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pdfLink">
                            PDF Link
                        </label>
                        <input
                            type="text"
                            id="pdfLink"
                            name="pdfLink"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="note">
                            Quick Note
                        </label>
                        <textarea
                            id="note"
                            name="note"
                            // value={note}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                        />
                    </div>
                    <div className="form-control mt-6 items-center">
                        <input className="btn w-28 btn-primary" type="submit" value="Submitted" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmissionForm;
