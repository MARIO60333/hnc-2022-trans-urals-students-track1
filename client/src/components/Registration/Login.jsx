import React, {useEffect, useState} from 'react';
import s from './Registration.module.css'
import axios from "axios";
import Dashboard from "../Dashboard/Dashboard";
// import {Route} from 'react-router-dom'
// import {Routes} from "react-router";
import {Routes, Route,Link} from 'react-router-dom'


const Login = () => {


    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    console.log(password)
    const handleClicke = (el) => {
        return el.preventDefault()
    }

    const log = (e) => {
        axios({
            method:"POST",
            url:"http://localhost:5000/api/signin",
            data:{
                username:e.username,//.toString(),
                password:e.password//.toString(),
                // phoneNumber:e.phoneNumber.toString()
            }
        }).then(function (response) {
            console.log(response)
            if (response.data.status === 0) {
                alert('вы авторизовались')
                // <Routes><Route path={"/dashboard"} element={<Dashboard/>}/></Routes>
            }
            else{
                alert('Ошибка авторизации,' +
                    ' перевроверьте данные')
            }
        })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (
        <div>
            страница авторизации
            <div>
                <Dashboard/>
                <form className={s.form} onSubmit={handleClicke}  action={""} >
                    <input className={s.input} type="password"
                           onChange={e => setPassword(e.target.value)}
                           name="password" placeholder={'пароль'}/>
                    <input className={s.input}
                           onChange={e => setUsername(e.target.value)}
                           type="text" name="username" placeholder={'логин'}/>
                    <input className={s.input_btn}
                           type="submit"
                           onClick={()=> log({
                               password,
                               username
                           })}
                           placeholder={'войти'}/>
                </form>

            </div>
        </div>
    );
};

export default Login;