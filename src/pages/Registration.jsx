
import React, { useContext, useState, } from 'react';
import { Link, } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2'
import { AuthProvider } from '../components/ContextAPI';
const Registration = () => {
    const { signUpUser } = useContext(AuthProvider);
    const [error, setError] = useState('');
    const handleSubmitForm = (e) => {
        e.preventDefault();
        // const name = e.target.name.value;
        // const photo = e.target.Photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        if (passwordRegex.test(password)) {
            //creating new User
            signUpUser(email, password)
                .then((result) => {
                    const user = result.user;
                    if (user) {
                        Swal.fire({
                            title: "Registration Done Successfully",
                            icon: "success",
                            draggable: true
                        });
                    }
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                    setError(errorMessage);
                });
        }
        else {
            setError('Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.')
        }


    }

    return (
        <div className='bg-secondary'>
            <div className="hero bg-base-200 min-h-screen ">
                <div className="card text-gray-200  space-y-4 w-full max-w-sm border-2 border-amber-300 rounded-2xl shrink-0 shadow-2xl my-[200px] md:my-[100px] lg:my-[150px] p-5 ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-gray-800">Register now!</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmitForm}>
                            <label className="label text-lg text-gray-800">Name</label>
                            <input type="text" className="input text-gray-800" name="name" placeholder="Enter Your Full name" />
                            <label className="label text-lg text-gray-800">Photo URL</label>
                            <input type="text" className="input text-gray-800" name="Photo" placeholder="Enter Your Photo" />
                            <label className="label text-lg text-gray-800">Email</label>
                            <input type="email" className="input text-gray-800" name="email" placeholder="Enter Your Email" />
                            <label className="label text-lg text-gray-800">Password</label>
                            <input type="password" className="input text-gray-800" name="password" placeholder="Password" /><br /><br />
                            <div className="flex justify-between"> <div>Already Logged in? <Link className="btn text-gray-800 bg-amber-300 p-2 hover:bg-white hover:text-amber-300 " to="/auth/login">Login Now</Link></div>
                                <button className="btn text-gray-800 bg-amber-300 p-2 hover:bg-white hover:text-amber-300 ">Register</button><br /></div>
                        </form>
                    </div>
                    {error && <p className='text-red-500 text bold'>{error}</p>}
                </div>
            </div>
            <hr className='border-1 border-gray-800' />
        </div>
    );
};

export default Registration;