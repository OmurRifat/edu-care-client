import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../userContext/AuthProvider';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <div className='text-center' role="status">
            <progress className="progress w-56"></progress>
            <span className="sr-only">Loading...</span>
        </div>
    }
    if (!user) {
        return <Navigate to='/register' state={ { from: location } } replace></Navigate>
    }
    return children
};

export default PrivateRoute;