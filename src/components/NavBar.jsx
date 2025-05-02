import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';

const NavBar = () => {
    const {user, logOut} = use(AuthContext)

    const handleLogOut = ()=>{
        logOut()
        .then(() => {
            alert('logout successfully')
          }).catch((error) => {
            // console.log(error);
          });
    }

    return (
        <div className='flex justify-between mb-10'>
             <div>{user && user.displayName}</div>
             <div className='flex gap-5 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
             </div>
             <div className='login-btn flex items-center gap-3'>
                <img className='w-12 h-12 border-2 border-primary rounded-full object-cover' src={user ? user.photoURL : userIcon} alt="user image" />
                {
                    user ? (<button onClick={handleLogOut} className='btn btn-primary px-10'>Log Out</button>): (<Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>)
                }
                
             </div>
        </div>
    );
};

export default NavBar;