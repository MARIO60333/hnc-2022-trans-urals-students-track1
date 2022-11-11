import './App.css'
import React from 'react';
import Home from "./components/Home/Home";
import Header from "./components/UI/Header";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Home/>
        </div>
    );
};

export default App;
