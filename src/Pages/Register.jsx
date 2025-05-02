import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photoUrl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photoUrl, email, password);

        createUser(email, password)
            .then((result)=>{
                const user = result.user
                console.log(user);
            })
            .catch(error=>alert('Something Wrong', error))

    }
    return (
        <div className="flex justify-center card bg-base-100 w-full max-w-md shrink-0 shadow">
            <h2 className='text-2xl p-5 text-center'>Register your account</h2>
            <div className='divider w-11/12 mx-auto text-base-300'></div>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset space-y-2">
                    <label className="label">Your Name</label>
                    <input type="text" name='name' className="w-full input" placeholder="Enter your Name" />
                    <label className="label">Photo URL</label>
                    <input type="text" name='photoUrl' className="w-full input" placeholder="Enter your Photo Url" />
                    <label className="label">Email Address</label>
                    <input type="email" name='email' className="w-full input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="w-full input" placeholder="Enter your password" />
                    <div><p className="flex items-center gap-2"><input type="checkbox" className="checkbox checkbox-neutral checkbox-xs" /> Accept Terms & Conditions</p></div>
                    <button type='submit' className="btn btn-primary mt-4">Register</button>
                    <div><p className="">Already Have An Account? <Link to='/auth/login' className='link link-hover text-secondary font-bold'>Login</Link></p></div>
                </form>
            </div>
        </div>
    );
};

export default Register;