import './App.css'
import React from 'react';
import Home from "./components/Home/Home";
import Header from "./components/UI/Header";
import {Routes, Route,Link} from 'react-router-dom'
import Donate from "./components/Donate/Donate";
import Layout from "./components/Layout/Layout";
import Streamer from "./components/Streamer/Streamer";
import PayPage from "./components/PayPage/PayPage";
import Error from "./components/Error/Error";
import Login
    from "./components/Registration/Login";
import Registration
    from "./components/Registration/Registration";

const App = () => {

    return (
        <div className="app">
            <div className="wrapper">
                <Header/>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="donate" element={<Donate/>}/>
                        <Route path="dashboard" element={<Donate/>}/>
                        <Route path="streamername" element={<PayPage/>}/>
                        <Route path="streamer" element={<Streamer/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Registration/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
};

export default App;
