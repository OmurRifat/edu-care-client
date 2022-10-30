import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../userContext/AuthProvider';



const Register = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { setUser, googleSignIn, registerEmailPass, gitHubSignIn } = useContext(AuthContext);

    const handleEmailPassRegister = (e) => {
        e.preventDefault();
        const from = e.target.form;
        const name = from.name.value;
        const url = from.photoURL.value;
        const email = from.email.value;
        const password = from.password.value;

        registerEmailPass(email, password)
            .then(result => {
                setUser(result.user)
                from.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        gitHubSignIn(gitProvider)
            .then(result => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => { console.error(error) })
    }

    return (
        <div className='text-center'>
            <form onSubmit={ handleEmailPassRegister } className=" drop-shadow-lg flex flex-col items-center my-4 md:w-1/5 mx-auto border-0 rounded-3xl bg-gray-200">
                <input required id='name' type="text" placeholder="Your Full Name" className=" shadow-inner mb-4 mt-8 input border-0 md:w-3/4 max-w-xs" />
                <input required id='photoURL' type="text" placeholder="Photo URL" className="shadow-inner mb-4 input border-0 md:w-3/4 max-w-xs" />
                <input required id='email' type="email" placeholder="Your Email" className="shadow-inner mb-4 input border-0 md:w-3/4 max-w-xs" />
                <input required id='password' type="password" placeholder="Your Password" className="shadow-inner mb-4 input border-0 md:w-3/4 max-w-xs" />
                <button onClick={ handleEmailPassRegister } className="btn bg-purple-700 text-white mb-4 drop-shadow-lg">Register</button>
            </form>
            <button onClick={ handleGoogleSignIn } className=" drop-shadow-lg btn bg-amber-500 border-0 text-white mt-5">Sign In with Google <FaGoogle className='ml-2'></FaGoogle></button>
            <p className=''>Or</p>
            <button onClick={ handleGithubSignIn } className=" drop-shadow-lg btn bg-indigo-700 border-0 text-white">Sign In with GitHub <FaGithub className='ml-2'></FaGithub></button>
            <div className='my-4'>
                <h6>Already have an account?<Link className='text-blue-800 font-semibold' to='/login'>Login</Link></h6>
            </div>
        </div>
    );
};

export default Register;