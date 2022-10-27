import React from 'react';
import { Link } from 'react-router-dom';

const FacaltiesTitle = ({ facalty }) => {
    const { discipline, description } = facalty;
    return (
        <div className='mb-2'>
            <Link>
                <div className="card w-auto h-24 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{ discipline }</h2>
                        <p>{ description }</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FacaltiesTitle;