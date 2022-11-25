import { useDispatch, useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { loadUser } from "./Actions/User";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import AddPost from "./components/Posts/AddPost";
function App() {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(loadUser());
    }, []);
    return (
        <Router>
            {isAuthenticated && <Header />}
            <Routes>
                <Route
                    path="/"
                    element={isAuthenticated ? <Home /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={isAuthenticated ? <Home /> : <Register />}
                />
                <Route
                    path="/add/post"
                    element={isAuthenticated ? <AddPost /> : <Login />}
                />
            </Routes>
        </Router>
    );
}

export default App;
