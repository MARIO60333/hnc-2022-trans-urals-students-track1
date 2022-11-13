import React, {useEffect, useState} from 'react';
import {registration} from "../../http/userAPI";
import s from './Login.module.css'

const Login = () => {

    const [password, setPassword] = useState()
    const [repeat, setRepeat] = useState()
    const [phone, setPhone] = useState()

    // const signIn = async () => {
    //     const response = await registration(password, phone)
    //     console.log(response)
    // }

    const handleClick = (e) => {
        return e.preventDefault()
    }

    return (
        <div>
            страница авторизации
            <div>
                <form action="" onSubmit={handleClick}>
                    <div className={s.container}>
                        <h1>Регистрация</h1>
                        <label htmlFor="phone">Номер телефона</label>
                        <input type="text"
                               placeholder="Enter phone number"
                               value={phone}
                               onChange={e => setPhone(e.target.value)}
                               name="email"/>

                        <label htmlFor="psw"><b>Пароль</b></label>
                        <input type="password"
                               placeholder="Enter Password"
                               value={password}
                               onChange={e => setPassword(e.target.value)}
                               name="psw"/>
                        <label htmlFor="psw-repeat"><b>Повторите пароль</b></label>
                        <input type="password"
                               placeholder="Repeat Password"
                               value={repeat}
                               onChange={e => setRepeat(e.target.value)}
                               name="psw-repeat"/>

                        <button type="submit"
                                // onClick={signIn}
                                className="registerbtn">Зарегестрироваться</button>

                    </div>

                    <div className="container signin">
                        <p>Уже есть аккаунт ? <button>Войти</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;