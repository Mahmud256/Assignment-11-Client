import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Navbar from '../../components/Header/Navbar';

const SubmissionForm = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const pdfLink = form.pdfLink.value;
        const note = form.note.value;
        const formData = {
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
                    alert('form submitted successfully')
                }
            })
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-[1300px] mx-auto">
                <form onSubmit={handleSubmit} className="card bg-white border shadow rounded px-8 pt-6 pb-8 mb-4">
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
