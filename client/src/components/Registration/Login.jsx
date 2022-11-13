import React, {useEffect, useState} from 'react';
import s from './Registration.module.css'


const Login = ({password,username}) => {

    return (
        <div>
            страница авторизации
            <div>
                <form className={s.form} method="post" action={"http://localhost:5000/api/signin"}>
                    <input className={s.input} type="password" name="password" placeholder={'пароль'}/>
                    <input className={s.input} type="text" name="username" placeholder={'логин'}/>
                    <input className={s.input_btn} type="submit" placeholder={'войти'}/>
                </form>
            </div>
        </div>
    );
};

export default Login;