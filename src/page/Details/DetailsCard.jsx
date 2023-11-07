/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DetailsCard = ({ assignment }) => {
    const { _id, title, assignmentLevel, marks, dueDate, description, product_img } = assignment || {};


    return (
        <div>
            <div className="p-2 flex flex-col lg:flex-row justify-around bg-base-100 px-2">
                <div className='meh lg:w-[440px]'>
                    <figure><img className='w-full' src={product_img} alt="" /></figure>
                    <div className='mah my-5'>
                        <div className="relative">
                            <h2 className="card_title text-start text-xl font-medium rounded p-2">
                                Marks: {marks}
                            </h2>
                            <h2 className="card_title text-start text-xl font-medium rounded p-2">
                                Level: {assignmentLevel}
                            </h2>
                            <h2 className="card_title text-start text-xl font-medium rounded p-2">
                                Due Date: {dueDate}
                            </h2>
                        </div>
                    </div>
                    <div className="card-actions justify-start relative">
                        <Link to={`/subform/${_id}`}>
                        <button className="btn bg-green-600 border-none normal-case text-xl font-semibold text-[#fff]">
                            Take assignment
                        </button>
                    </Link>
                </div>
            </div>

            <div className="cardbody w-330px lg:w-[730px] pb-10">
                <h2 className="card-title text-2xl lg:text-4xl font-bold pb-3 capitalize">{title}</h2>
                <p className='text-base'>{description}</p>
            </div>
        </div>
        </div >
    );
};

export default DetailsCard;