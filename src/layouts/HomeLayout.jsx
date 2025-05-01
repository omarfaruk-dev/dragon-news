import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3 space-y-5'>
                <Header />
                <section>
                    <LatestNews />
                </section>
                <nav>
                    <NavBar/>
                </nav>
            </header>
            <main>
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;