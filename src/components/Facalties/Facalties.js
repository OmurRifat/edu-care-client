import React, { useContext } from 'react';
import { AuthContext } from '../../userContext/AuthProvider';
import Facalty from '../Facalty/Facalty'
import FacaltiesTitle from '../FacaltiesTitle/FacaltiesTitle'

const Facalties = () => {
    const { facalties } = useContext(AuthContext)
    return (
        <div className='grid grid-cols-1 md:grid-cols-12 gap-x-5 my-8 gap-y-6'>
            <div className='md:col-span-3'>
                <div className='gird grid-cols-1'>
                    {
                        facalties?.map(facalty => <FacaltiesTitle
                            key={ facalty.id }
                            facalty={ facalty }
                        ></FacaltiesTitle>)
                    }

                </div>
            </div>
            <div className='md:col-span-9'>
                <div className='grid md:grid-cols-3 gap-4'>
                    {
                        facalties?.map(facalty => <Facalty
                            key={ facalty.id }
                            facalty={ facalty }
                        ></Facalty>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Facalties;