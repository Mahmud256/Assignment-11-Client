import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
    const details = useLoaderData();
    const [assignment, setAssignment] = useState();
    const { _id } = useParams()

    useEffect(() => {
        const findAssignment = details?.find((assignment) => assignment._id == _id);
        setAssignment(findAssignment);
    }, [_id, details])

    return (
        <div>
            {
                <DetailsCard assignment={assignment} ></DetailsCard>
            }
        </div>
    );
};

export default Details;