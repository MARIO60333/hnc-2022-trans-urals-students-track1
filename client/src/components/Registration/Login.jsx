import React, {useEffect, useState} from 'react';
// import {registration} from "../../http/userAPI";
import s from './Login.module.css'
import axios from "../../http";
import {Link} from "react-router-dom";

const Login = ({password,username}) => {

    // useEffect(() => {
    //     fetch('http://localhost:5000/api/signin',{
    //         method:"POST",
    //         data:{
    //             username:username,
    //             password:password
    //         }
    //     })
    //         .then(function (response) {
    //             return response
    //         })
    // },[])

    return (
        <div>
            страница авторизации
            <div>
                <form method="post" action={"http://localhost:5000/api/signin"}>
                    <input type="text" name="password" placeholder={'пароль'}/>
                    <input type="text" name="username" placeholder={'логин'}/>
                    <input type="submit" placeholder={'войти'}/>

                </form>
            </div>
        </div>
    );
};

export default Login;