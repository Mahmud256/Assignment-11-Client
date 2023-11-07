/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const AssignmentsCards = ({ assignment, handleRemove }) => {
    const { _id, title, marks, assignmentLevel, product_img } = assignment || {};

    return (
        <div>
            <div className="card lg:w-72 bg-base-100 border shadow">
                <figure>
                    <img className='h-40 w-96 lg:w-72' src={product_img} alt="" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {title}
                    </h2>
                    <h2 className="card_title text-start text-xl font-medium rounded p-2">
                        Level: {assignmentLevel}
                    </h2>
                    <h2 className="card_title text-start text-xl font-medium rounded p-2">
                        Marks: {marks}
                    </h2>

                    <div className="card-actions justify-center">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-green-700 hover:bg-green-700 normal-case text-lg font-semibold text-[#fff]"> View Assignment</button>
                        </Link>

                        <Link to={`/updateassignment/${_id}`}>
                            <button className="btn bg-orange-600 hover:bg-orange-600 normal-case text-lg font-semibold text-[#fff]">Update Assignment</button>
                        </Link>

                        <button onClick={() => handleRemove(_id)} className="btn bg-red-600 hover:bg-yellow-600 normal-case text-lg font-semibold text-[#fff]">Remove Assignment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentsCards;