import React from 'react';
import { Link } from 'react-router-dom';
import './Facalty.css'

const Facalty = ({ facalty }) => {
    // console.log(facalty)
    const { discipline, description, img, id } = facalty;
    return (
        <div id='facalty-div'>
            <div className="  card card-compact w-auto bg-base-100 shadow-xl">
                <figure><img src={ img } alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{ discipline }</h2>
                    <p>{ description }</p>
                    <div className="card-actions justify-end">
                        <Link to={ `/facalties/${id}` }><button className="btn btn-primary">See More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facalty;