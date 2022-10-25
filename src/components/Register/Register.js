import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../userContext/AuthProvider';



const Register = () => {
    const googleProvider = new GoogleAuthProvider();

    const { setUser, googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='text-center'>
            <btn onClick={ handleGoogleSignIn } className="btn text-white">Sign In with Google</btn>
        </div>
    );
};

export default Register;