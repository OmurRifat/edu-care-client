import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='header-content'>
                <div className=' text-white text-center'>
                    <h4 className='text-base md:text-4xl font-semibold text-white text-center pt-14 md:pt-24'>Let's Learn With EDUCARE!</h4>
                    <p className=' mt-1 text-xs md:text-base md:mt-4'>We will ensure your quality Education with proper Care.<br></br>And We promised to do that.</p>
                    <Link to='/' className="header-btn btn mt-2 md:mt-8 bg-indigo-600 text-white hover:bg-indigo-700">Learn More <FaArrowRight></FaArrowRight></Link>
                </div>
            </div>
        </div >
    );
};

export default Home;