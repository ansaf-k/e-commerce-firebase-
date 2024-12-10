import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef } from "react";
import { auth, db } from "../Firebase/FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

const SignUp = () => {
    const email = useRef();
    const name = useRef();
    const password = useRef();
    const navigate = useNavigate();

    const register = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password).then((res) => {
            console.log('User created successfully');
            const user = res.user;
            navigate("/login");
            const studentData = {
                name: name,
                email: email,
                password: password,
                uid: user.uid,
                isRole: false
            };
            const signRef = doc(db, "users",user.uid);
            return setDoc(signRef, studentData);
        })
    }


    const HandleRegister = (e) => {
        e.preventDefault();
        register(name.current.value, email.current.value, password.current.value);
    }

    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full mx-auto">
                    {/* Close Button */}
                    <button
                        className="absolute top-2 right-2 z-50 text-black hover:text-gray-700"
                        onClick={() => navigate('/')}
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
                    <div className="flex flex-wrap saturate-75 h-[70vh]">

                        {/* Image Section */}
                        <div className="relative w-full saturate-0 lg:w-1/2">
                            <img
                                alt="Banner"
                                src="../../src/assets/banner3.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        {/* Form Section */}
                        <div className="w-full flex-auto justify-center content-center items-center lg:w-1/2 px-6 py-8">
                            <div className="text-center">
                                <h1 className="text-2xl font-bold sm:text-3xl">Get started today!<br />Create Your Account</h1>
                                <p className="mt-4 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque ipsa
                                    culpa autem, at itaque nostrum!
                                </p>
                            </div>

                            <form onSubmit={HandleRegister} className="mt-8 space-y-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <div className="relative">
                                        <input
                                            ref={name}
                                            type="text"
                                            className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                                            placeholder="Enter Name"
                                        />
                                    </div>
                                </div>

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
                                        Already have an account?
                                        <Link className="underline" to="/login">Log In</Link>
                                    </p>

                                    <button
                                        type="submit"
                                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp