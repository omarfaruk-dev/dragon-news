import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png';

const NavBar = () => {
    return (
        <div className='flex justify-between mb-10'>
             <div></div>
             <div className='flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
             </div>
             <div className='login-btn flex gap-2'>
                <img src={user} alt="user image" />
                <Link className='btn btn-primary px-10'>Login</Link>
             </div>
        </div>
    );
};

export default NavBar;