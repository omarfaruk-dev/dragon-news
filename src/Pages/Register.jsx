import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="flex justify-center card bg-base-100 w-full max-w-md shrink-0 shadow">
            <h2 className='text-2xl p-5 text-center'>Register your account</h2>
            <div className='divider w-11/12 mx-auto text-base-300'></div>
            <div className="card-body">
                <form className="fieldset space-y-2">
                    <label className="label">Your Name</label>
                    <input type="text" name='name' className="w-full input" placeholder="Enter your Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photoUrl' className="w-full input" placeholder="Enter your Photo Url" />
                    <label className="label">Email Address</label>
                    <input type="email" className="w-full input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="w-full input" placeholder="Enter your password" />
                    <div><p className="flex items-center gap-2"><input type="checkbox" className="checkbox checkbox-neutral checkbox-xs" /> Accept Terms & Conditions</p></div>
                    <button className="btn btn-primary mt-4">Register</button>
                    
                </form>
            </div>
        </div>
    );
};

export default Register;