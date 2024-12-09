import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth } from "../Firebase/FirebaseConfig";
import { Link } from "react-router-dom";

const SignUp = () => {
    const email = useRef();
    const name = useRef();
    const password = useRef();

    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            console.log('User created successfully');
        })
    }

    const HandleRegister = (e) => {
        e.preventDefault();
        register(name.current.value, email.current.value, password.current.value);
    }

    return (
        <>
            <section className="relative flex flex-wrap lg:h-screen lg:items-center">
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                            ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <form onSubmit={HandleRegister} action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    ref={name}
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Your Name"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className='size-4 text-gray-400' viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2" /><circle cx="12" cy="7" r="4" />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    ref={email}
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    ref={password}
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-500">
                                already have an account?
                                <Link className="underline" to={'/login'}>Login In</Link>
                            </p>

                            <button
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div >

                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                        alt=""
                        src="../../src/assets/banner2.jpg"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </div>
            </section >
        </>
    )
}

export default SignUp