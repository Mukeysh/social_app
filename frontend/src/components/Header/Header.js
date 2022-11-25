import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { BsPlusSquare, BsPlusSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Header = () => {
    const [tab, setTab] = useState(window.location.pathname);
    const { user } = useSelector((state) => state.user);
    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
            <div className="max-w-5xl mx-auto">
                <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                    <div className="relative grid grid-cols-3">
                        <div className="flex items-center">
                            <img src="instagram.png" />
                        </div>
                        <div>
                            <form>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-gray-200 py-2 px-4 rounded-lg"
                                />
                            </form>
                        </div>
                        <div className="flex items-center justify-end">
                            <Link to="/" onClick={() => setTab("/")}>
                                {tab === "/" ? (
                                    <AiFillHome size="1.5rem" />
                                ) : (
                                    <AiOutlineHome size="1.5rem" />
                                )}
                            </Link>
                            <Link
                                to="/add/post"
                                onClick={() => setTab("/newpost")}
                                className="ml-6"
                            >
                                {tab === "/newpost" ? (
                                    <BsPlusSquareFill size="1.5rem" />
                                ) : (
                                    <BsPlusSquare size="1.5rem" />
                                )}
                            </Link>
                            <Link
                                className="ml-6"
                                to="/account"
                                onClick={() => setTab("/account")}
                            >
                                <img
                                    src={user.avatar}
                                    className={
                                        tab === "/account"
                                            ? "w-6 h-6 rounded-full border-2 border-slate-900/10"
                                            : "w-6 h-6 rounded-full"
                                    }
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
