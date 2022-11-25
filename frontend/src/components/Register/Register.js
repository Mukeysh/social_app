import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Actions/User";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const registerHandler = (e) => {
        e.preventDefault();
        dispatch(registerUser(name, email, password));
    };
    return (
        <>
            <form
                onSubmit={registerHandler}
                className="border border-gray-300 border-solid px-10 py-5 max-w-sm m-auto mt-10"
            >
                <div className="my-5">
                    <h1 className="sr-only">Instagram</h1>
                    <img
                        src="instanew.png"
                        className="m-auto"
                        aria-hidden="true"
                    />
                    <h2 className="text-[#8e8e8e] mb-3 text-base font-semibold">
                        Sign up to see photos and videos from your friends.
                    </h2>
                </div>
                <div>
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        type="text"
                        className="bg-zinc-50 p-4 w-full border border-solid border-[#dbdbdb] h-9 mb-2"
                        id="name"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="off"
                        required
                    />
                </div>
                <div className="">
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="bg-zinc-50 p-4 w-full border border-solid border-[#dbdbdb] h-9 mb-2"
                        id="email"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="sr-only">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-zinc-50 p-4 w-full border border-solid border-[#dbdbdb] h-9 mb-2"
                        required
                        placeholder="Password"
                        id="password"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#0095f6] text-white w-full rounded-md px-1 py-2 mt-2 leading-5 mb-2"
                >
                    Sign Up
                </button>
                <p className="text-[#8e8e8e] text-xs text-center my-3">
                    By signing up, you agree to our Terms, Data Policy and
                    Cookie Policy.
                </p>
            </form>
            <div className="border border-gray-300 border-solid px-10 py-5 my-[10px] text-center max-w-sm m-auto">
                <p className="text-[#262626] text-sm">
                    Don't have an account?{" "}
                    <Link to="/">
                        <span className="text-[#0095f6] font-semibold">
                            Log In
                        </span>
                    </Link>
                </p>
            </div>
            <div className="flex flex-col items-center max-w-sm m-auto">
                <p className="text-sm mx-3 my-5">Get the app.</p>
                <div className="flex">
                    <a
                        aria-label="Download from the App Store"
                        className=""
                        href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
                    >
                        <img
                            alt="Download from the App Store"
                            className="h-10 mr-2"
                            src="180ae7a0bcf7.png"
                        />
                    </a>
                    <a
                        aria-label="Get it on Google Play"
                        className=""
                        href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D661653F8-F571-4880-87A6-30AC1995CE83%26utm_content%3Dlo%26utm_medium%3Dbadge"
                    >
                        <img
                            alt="Get it on Google Play"
                            className="h-10"
                            src="e9cd846dc748.png"
                        />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Register;
