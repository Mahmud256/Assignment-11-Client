import React from 'react';
import { Link } from 'react-router-dom';

const SubmittedCard = ({ assignment }) => {
    const { _id, title, marks, examineeName } = assignment || {};

    return (
        <div>
            <div className="card lg:w-72 bg-base-100 border shadow">

                <div className="card-body p-4">
                    <h2 className="card_title text-center text-xl font-medium rounded p-2">
                        {title}
                    </h2>

                    <h2 className="card_title text-start text-xl font-medium rounded p-2">
                        Marks: {marks}
                    </h2>

                    <h2 className="card_title text-start text-xl font-medium rounded p-2">
                        ExamineeName: {examineeName}
                    </h2>
                    <div className="card-actions justify-center">
                        <Link to={`/givemark/`}>
                            <button className='btn bg-green-500'>give mark</button>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default SubmittedCard;