import React, { useContext } from 'react';
import { AuthContext } from '../../userContext/AuthProvider';
import Facalty from '../Facalty/Facalty'

const Facalties = () => {
    const { facalties } = useContext(AuthContext)
    return (
        <div className=''>
            <div className='grid grid-cols-4'>
                <h4>This is course section</h4>
            </div>
            <div className='grid grid-cols-8'>
                {
                    facalties?.map(facalty => <Facalty
                        key={ facalty.id }
                        facalty={ facalty }
                    ></Facalty>)
                }
            </div>
        </div>
    );
};

export default Facalties;