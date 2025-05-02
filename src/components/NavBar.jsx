import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user} = use(AuthContext)
    return (
        <div className='flex justify-between mb-10'>
             <div>{user && user.name}</div>
             <div className='flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
             </div>
             <div className='login-btn flex gap-2'>
                <img src={userIcon} alt="user image" />
                <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
             </div>
        </div>
    );
};

export default NavBar;