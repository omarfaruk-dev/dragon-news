import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="flex justify-center card bg-base-100 w-full max-w-md shrink-0 shadow">
            <h2 className='text-2xl p-5 text-center'>Login your account</h2>
            <div className='divider w-11/12 mx-auto text-base-300'></div>
            <div className="card-body">
                <form className="fieldset space-y-2">
                    <label className="label">Email Address</label>
                    <input type="email" className="w-full input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input type="password" className="w-full input" placeholder="Enter your password" />
                    <button className="btn btn-primary mt-4">Login</button>
                    <div><p className="">Don't Have An Account? <Link to='/auth/register' className='link link-hover text-secondary font-bold'>Register</Link></p></div>
                </form>
            </div>
        </div>
        // <div className="flex justify-center items-center min-h-screen bg-gray-100">
        //     <div className="card bg-base-100 w-full max-w-md shrink-0 shadow">
        //         <h2 className="text-2xl p-5 text-center">Login your account</h2>
        //         <div className="card-body">
        //             <form className="fieldset">
        //                 <label className="label">Email Address</label>
        //                 <input type="email" className="w-full input" placeholder="Enter your email address" />

        //                 <label className="label">Password</label>
        //                 <input type="password" className="w-full input" placeholder="Enter your password" />

        //                 <button className="btn btn-primary mt-4">Login</button>

        //                 <div className="mt-2">
        //                     <p>
        //                         Don't Have An Account?{" "}
        //                         <a href="#" className="link link-hover text-secondary font-bold">Register</a>
        //                     </p>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>

    );
};

export default Login;