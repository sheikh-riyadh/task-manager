import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()
const Register = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password).then(() => {
            toast.success("Login successfull")
            form.reset()
        }).catch(error => {
            if (error.message === 'Firebase: Error (auth/wrong-password).') {
                toast.error('Incorrect password')
            } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                toast.error('User not found please register')
            } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                toast.error('Password should be at least 6 characters or longer')
            }
            console.log(error)
        })
    }

    const signInWithGoogleProvider = () => {
        signInWithGoogle(googleProvider).then((res) => {
            const user = res.user;
            console.log(user)
        }).catch(error => console.log(error))
    }
    return (
        <div className='w-11/12 lg:w-4/12 md:w-10/12 mx-auto my-24 dark:bg-gray-900 p-10 rounded-lg bg-white shadow-md'>
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                    <input name='name' type="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John doe" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input name='email' type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input name='password' type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder='******' />
                </div>
                <div className="flex items-start mb-6">
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Already have an account?</label>
                    <Link to='/login' className="link ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Login</Link>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
            </form>
            <hr className="my-5 h-px bg-gray-200 border-0 text-gray-900 dark:bg-gray-700"></hr>
            <div className='flex gap-3 items-center justify-center dark:text-gray-300'>
                <FaGoogle></FaGoogle>
                <button onClick={signInWithGoogleProvider}>Continue with google</button>
            </div>
        </div>
    );
};

export default Register;