import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'
import { AuthProvider } from '../components/ContextAPI';
const Login = () => {
    const { signInUser, signUpWithGoogle} = useContext(AuthProvider);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    console.log("this is login", location);
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError('');
        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                //success message
                if (user) {
                    Swal.fire({
                        title: "Login Done Successfully",
                        icon: "success",
                        draggable: true
                    });
                }
                navigate(location?.state || '/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                setError(errorMessage);
                navigate('/auth/login');
            });
    }

   

    const registrationLocation = () => {
        navigate('/auth/registration', { state: location.state });
    }
    return (
        <div className='bg-secondary'>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="card text-gray-800  space-y-4 w-full max-w-sm border-2 border-amber-300 rounded-2xl shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[150px] p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitForm}>
                            <label className="label text-lg ">Email</label>
                            <input type="email" className="input text-gray-800" name="email" placeholder="Enter Your Email" />
                            <label className="label text-lg ">Password</label>
                            <input type="password" className="input text-gray-800" name="password" placeholder="Password" /><br /><br />
                            <div><a className="link link-hover">Forgot password?</a></div><br />
                            <div className="flex justify-between">
                                <div>
                                    Haven't Register Yet?
                                    <button onClick={registrationLocation}>
                                        <Link to="/auth/register" className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Register Now</Link>
                                    </button>
                                </div>
                                <button className="btn text-white bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Login</button><br />
                            </div>
                            <button  className="btn bg-white hover:bg-amber-500 text-gray-700 mt-4"><FcGoogle></FcGoogle> Sign in with Google </button>
                        </form>
                    </div>
                    {error && <p className='text-red-500 text bold'>{error}</p>}
                </div>
            </div>
            <hr className='border-1 border-gray-800' />
        </div>
    );
};

export default Login;