import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import { AuthContext } from '../userContext/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <Header></Header>
            <div className='text-center' role="status">
                <progress className="progress w-56"></progress>
                <span className="sr-only">Loading...</span>
            </div>
            <Footer></Footer>
        </>
    }
    return (
        <div >
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;