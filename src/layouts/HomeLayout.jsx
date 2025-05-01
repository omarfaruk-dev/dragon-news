import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3 space-y-5'>
                <Header />
                <section>
                    <LatestNews />
                </section>
                <nav>
                    <NavBar />
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols md:grid-cols-12 gap-5'>
                <aside className='col-span-6 md:col-span-3 left-nav sticky top-0 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6 main'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3 right-nav sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;