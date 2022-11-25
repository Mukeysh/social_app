import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser } from "../../Actions/User";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const loginHandler = (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password));
    };
    return (
        <section>
            <main>
                <article className="max-w-4xl m-auto mt-8 grid grid-cols-2">
                    <div
                        className="h-128 relative"
                        style={{
                            backgroundImage: `url("bg.png")`,
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <img
                            src="screen.jpg"
                            className="absolute top-24 left-36 mt-1 ml-7"
                        />
                    </div>
                    <div className="max-w-sm mt-5">
                        <form
                            onSubmit={loginHandler}
                            className="border border-gray-300 border-solid px-10 py-5"
                        >
                            <div className="my-5">
                                <h1 className="sr-only">Instagram</h1>
                                <img
                                    src="instanew.png"
                                    className="m-auto"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-zinc-50 p-4 w-full border border-solid border-[#dbdbdb] h-9 mb-2"
                                    required
                                    placeholder="Email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    className="bg-zinc-50 p-4 w-full border border-solid border-[#dbdbdb] h-9 mb-2"
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#0095f6] text-white w-full rounded-md px-1 py-2 mt-2 leading-5 mb-2"
                            >
                                Log In
                            </button>
                            <div className="flex mt-2.5 mb-4">
                                <div className="bg-[#dbdbdb] h-px flex-1 relative top-2"></div>
                                <div className="text-sm leading-5 mx-4 font-semibold text-[#8e8e8e]">
                                    OR
                                </div>
                                <div className="bg-[#dbdbdb] h-px flex-1 relative top-2"></div>
                            </div>
                            <div className="mt-2.5 mb-4 text-center">
                                <button className="text-[#385185] font-semibold">
                                    Log in with Facebook
                                </button>
                            </div>
                            <Link
                                to="/forget-password"
                                className="text-xs text-center text-[#00376b] mt-3 block"
                            >
                                Forgotten your password?
                            </Link>
                        </form>
                        <div className="border border-gray-300 border-solid px-10 py-5 my-[10px] text-center">
                            <p className="text-[#262626] text-sm">
                                Don't have an account?{" "}
                                <Link to="/signup">
                                    <span className="text-[#0095f6] font-semibold">
                                        Sign up
                                    </span>
                                </Link>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
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
                    </div>
                </article>
            </main>
        </section>
    );
};

export default Login;
