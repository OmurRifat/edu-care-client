import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../userContext/AuthProvider';



const Register = () => {
    const googleProvider = new GoogleAuthProvider();

    const { setUser, googleSignIn, registerEmailPass } = useContext(AuthContext);

    const handleEmailPassRegister = (e) => {
        e.preventDefault();
        const from = e.target.form;
        const name = from.name.value;
        const url = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;

        registerEmailPass(email, password)
            .then(result => {
                console.log(result.user)
                from.reset();
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='text-center'>
            <form onSubmit={ handleEmailPassRegister } className="flex flex-col items-center my-4 w-1/4 mx-auto border p border-indigo-700 rounded-lg bg-gray-200">
                <input required id='name' type="text" placeholder="Your Name" className="my-4 input input-bordered input-success w-full max-w-xs" />
                <input required id='photoURL' type="text" placeholder="Photo URL" className="my-4 input input-bordered input-success w-full max-w-xs" />
                <input required id='email' type="email" placeholder="Your Email" className="mb-4 input input-bordered input-success w-full max-w-xs" />
                <input required id='password' type="password" placeholder="Your Password" className="mb-4 input input-bordered input-success w-full max-w-xs" />
                <button onClick={ handleEmailPassRegister } className="btn bg-purple-700 text-white mb-4">Submit</button>
            </form>
            <button onClick={ handleGoogleSignIn } className="btn bg-amber-500 border-0 text-white">Sign In with Google</button>
            <p className=''>Or</p>
            <button onClick={ handleGoogleSignIn } className="btn text-white">Sign In with GitHub</button>
        </div>
    );
};

export default Register;