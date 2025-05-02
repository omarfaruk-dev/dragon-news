import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='container mx-auto pt-10 px-5'>
                <NavBar/>
            </header>
            <main className='container mx-auto max-w-md'>
               <Outlet/>
            </main>
        </div>
    );
};

export default AuthLayout;