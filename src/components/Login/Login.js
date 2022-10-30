import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../userContext/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const { setUser, setError, googleSignIn, emailPassSignIn, gitHubSignIn } = useContext(AuthContext);

    const handleEmailPassSignIn = (e) => {
        e.preventDefault();
        const from = e.target.form;
        const email = from.email.value;
        const password = from.password.value;

        emailPassSignIn(email, password)
            .then(result => {
                setUser(result.user)
                from.reset();
                navigate(from, { replace: true })
            })
            .catch(error => setError(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }
    const handleGithubSignIn = () => {
        gitHubSignIn(gitProvider)
            .then(result => {
                setUser(result.user);
                navigate(from, { replace: true })
            })
            .catch(error => { setError(error) })
    }
    return (
        <div className='text-center'>
            <form onSubmit={ handleEmailPassSignIn } className=" drop-shadow-lg flex flex-col items-center my-4 md:w-1/5 mx-auto border-0 rounded-3xl bg-gray-200">
                <input required id='email' type="email" placeholder="Your Email" className="mt-8 shadow-inner mb-4 input border-0 md:w-3/4 max-w-xs" />
                <input required id='password' type="password" placeholder="Your Password" className="shadow-inner mb-4 input border-0 md:w-3/4 max-w-xs" />
                <button onClick={ handleEmailPassSignIn } className="btn drop-shadow-xl bg-purple-700 text-white mb-4">Log In</button>
            </form>
            <button onClick={ handleGoogleSignIn } className="btn bg-amber-500 border-0 text-white">Sign In with Google <FaGoogle className='ml-2'></FaGoogle></button>
            <p className=''>Or</p>
            <button onClick={ handleGithubSignIn } className="btn text-white bg-indigo-700">Sign In with GitHub <FaGithub className='ml-2'></FaGithub></button>
            <div className='my-4'>
                <h6>Want to create an account?<Link className='text-blue-800 font-semibold' to='/register'>Register</Link></h6>
            </div>
        </div>
    );
};

export default Login;