import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const data = useLoaderData();
    const { discipline } = data;
    return (
        <div>
            <div className="mx-auto my-14 card w-96 bg-slate-400 text-neutral-content">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{ discipline }</h2>
                    <p>Confirm Your Order!</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Yes</button>
                        <button className="btn btn-ghost">Not Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;