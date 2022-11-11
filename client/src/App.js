import './App.css'
import React from 'react';
import Home from "./components/Home/Home";
import Header from "./components/UI/Header";

const App = () => {

    // fetch('http:/localhost:5000')
    //     // .then(res => res.json())
    //     .then(com => console.log(com))

    return (
        <div className="app">
            <Header/>

            <Home/>
        </div>
    );
};

export default App;
