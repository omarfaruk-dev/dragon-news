import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../provider/AuthProvider';

const SocialLogin = () => {
    const { user } = use(AuthContext)
    const { googleSignIn } = use(AuthContext);

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error, error.message);
            })

    }
    return (
        <div>
            {
                !user && <div>
                    <h2 className='font-bold'>Login With</h2>
                    <div className='space-y-3 mt-5'>
                        <button onClick={handleGoogleLogin} className='w-full btn btn-outline btn-secondary'><FcGoogle /> Login With Google</button>
                        <button className='w-full btn btn-outline btn-primary'><FaGithub /> Login With Github</button>
                    </div>
                </div>
            }

        </div>
    );
};

export default SocialLogin;