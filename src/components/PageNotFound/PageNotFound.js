import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/404.jpg'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='notFound'>
            <img src={ img } alt="" />
            <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
        </div>
    );
};

export default PageNotFound;