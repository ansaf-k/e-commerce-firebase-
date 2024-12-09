// import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react';
import { auth } from '../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

const Login = () => {
    const email = useRef();
    const password = useRef();

    const register = (email, password) => {
        signInWithEmailAndPassword(auth, email, password).then(() => {
            console.log('User created successfully');
        })
    }


    const HandleRegister = (e) => {
        e.preventDefault();
        register(email.current.value, password.current.value);
    }
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto">
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        // onClick={() => setIsOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Modal Content */}
                    <div className="flex flex-wrap">
                        {/* Form Section */}
                        <div className="w-full lg:w-1/2 px-6 py-8">
                            <div className="text-center">
                                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa
                                    culpa autem, at itaque nostrum!
                                </p>
                            </div>

                            <form onSubmit={HandleRegister} className="mt-8 space-y-4">
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <div className="relative">
                                        <input
                                            ref={email}
                                            type="email"
                                            className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                                            placeholder="Enter email"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <div className="relative">
                                        <input
                                            ref={password}
                                            type="password"
                                            className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <p className="text-sm text-gray-500">
                                        No account?
                                        <Link className="underline" to="/signIn">Sign In</Link>
                                    </p>

                                    <button
                                        type="submit"
                                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                    >
                                        LogIn
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Image Section */}
                        <div className="relative w-full lg:w-1/2">
                            <img
                                alt="Banner"
                                src="../../src/assets/banner2.jpg"
                                className="absolute inset-0 h-full w-full object-cover rounded-r-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

