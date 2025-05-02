import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);

    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (name.length < 4) {
            setNameError('Name should 4 character or longer!')
            return;
        } else {
            setNameError('')
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                navigate('/')
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo })
                })
                    .catch(error => {
                        alert(error);
                        setUser(user);
                    })
            })
            .catch(error => alert('Something Wrong', error))

    }
    return (
        <div className="flex justify-center card bg-base-100 w-full max-w-md shrink-0 shadow">
            <h2 className='text-2xl p-5 text-center'>Register your account</h2>
            <div className='divider w-11/12 mx-auto text-base-300'></div>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset space-y-2">
                    <label className="label">Your Name</label>
                    <input type="text" name='name' className="w-full input" placeholder="Enter your Name" />
                    {nameError && <p className='text-secondary'>{nameError}</p>}
                    <label className="label">Photo URL</label>
                    <input type="text" name='photo' className="w-full input" placeholder="Enter your Photo Url" required />
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