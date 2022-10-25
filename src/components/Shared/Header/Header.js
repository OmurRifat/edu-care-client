import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/logo.png'
import { FaUserCircle } from 'react-icons/fa'
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={ 0 } className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>Faculties</Link></li>
                        <li><Link to='/'>Research</Link></li>
                        <li><Link to='/'>Notices</Link></li>
                        <li><Link to='/'>Blogs</Link></li>
                        <li><Link to='/'>FAQ</Link></li>
                    </ul>
                </div>
                <div>
                    <img style={ { width: "20%", display: "inline" } } src={ img } alt="" />
                    <Link to='/' className="normal-case text-xl font-semibold">EDUCARE</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Faculties</Link></li>
                    <li><Link to='/'>Research</Link></li>
                    <li><Link to='/'>Notices</Link></li>
                    <li><Link to='/'>Blogs</Link></li>
                    <li><Link to='/'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control mr-5">
                    <label className="label cursor-pointer">
                        <span className="label-text mr-2">Light / Dark</span>
                        <input type="checkbox" className="toggle" checked />
                    </label>
                </div>
                <Link id='user-profile' title='User Name' style={ { width: "" } }><FaUserCircle></FaUserCircle></Link>
                <Link to='/' className="btn">Login / Resister</Link>
            </div>
        </div>
    );
};

export default Header;