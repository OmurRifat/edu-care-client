import React, { useRef } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import './FacaltyDetails.css'
import Pdf from 'react-to-pdf'

const FacaltyDetails = () => {
    const ref = useRef();
    const data = useLoaderData();
    const { discipline, description, details, img, id } = data;
    return (
        <div className=''>
            <div className='pdf-container'>
                <div className="mx-auto card md:w-1/2 md:h-16 bg-primary text-primary-content">
                    <div className=" h-full flex flex-row justify-around items-center" >
                        <h2 className="card-title">Download The Content</h2>
                        <Pdf targetRef={ ref } filename="Sylabus.pdf">
                            { ({ toPdf }) => <button className='btn' onClick={ toPdf }><FaFileDownload></FaFileDownload></button> }
                        </Pdf>
                    </div>
                </div>
            </div>
            <div className="mx-auto md:mt-4 card w-96 bg-base-100 shadow-xl">
                <figure><img src={ img } alt="Shoes" /></figure>
                <div className="card-body">
                    <div ref={ ref }>
                        <h2 className="card-title">
                            { discipline }
                            <div className="badge badge-secondary">EPIC</div>
                        </h2>
                        <h4>{ description }</h4>
                        <p>{ details }</p>
                        <div>
                            <strong>Common Course Content</strong>
                            <ol>
                                <li>History or Bangladesh</li>
                                <li>Ethical Behaviour</li>
                                <li>Economis</li>
                                <li>Socilogy</li>
                                <li>Basic Computer</li>
                            </ol>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={ `checkout/${id}` }><button className="btn btn-primary">GET PREMIUM ACCESS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacaltyDetails;