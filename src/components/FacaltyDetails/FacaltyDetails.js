import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './FacaltyDetails.css'

const FacaltyDetails = () => {
    const data = useLoaderData();
    const { discipline, description, details, img } = data;
    return (
        <div className=''>
            <div className='pdf-container'>
                <div className="mx-auto card md:w-1/2 md:h-16 bg-primary text-primary-content">
                    <div className=" h-full flex flex-row justify-around items-center" >
                        <h2 className="card-title">Download The Content</h2>
                        <Link to='/' className="btn"><FaFileDownload></FaFileDownload></Link>
                    </div>
                </div>
            </div>
            <div className="mx-auto md:mt-24 card w-96 bg-base-100 shadow-xl">
                <figure><img src={ img } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        { discipline }
                        <div className="badge badge-secondary">EPIC</div>
                    </h2>
                    <h4>{ description }</h4>
                    <p>{ details }</p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">GET PREMIUM ACCESS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacaltyDetails;