import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');

    const { loginUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                alert('success')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage)
            });

    }

    return (
        <div className="flex justify-center card bg-base-100 w-full max-w-md shrink-0 shadow">
            <h2 className='text-2xl p-5 text-center'>Login your account</h2>
            <div className='divider w-11/12 mx-auto text-base-300'></div>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset space-y-2">
                    <label className="label">Email Address</label>
                    <input name="email" type="email" className="w-full input" placeholder="Enter your email address" />
                    <label className="label">Password</label>
                    <input name="password" type="password" className="w-full input" placeholder="Enter your password" />
                    {error && <p className='text-secondary'>{error}</p>}
                    <button type='submit' className="btn btn-primary mt-4">Login</button>
                    <div><p className="">Don't Have An Account? <Link to='/auth/register' className='link link-hover text-secondary font-bold'>Register</Link></p></div>
                </form>
            </div>
        </div>

    );
};

export default Login;