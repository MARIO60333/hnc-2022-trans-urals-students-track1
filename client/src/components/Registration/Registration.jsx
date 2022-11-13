import React, {useEffect, useState} from 'react';
import s from "./Login.module.css";
import {Link} from "react-router-dom";
// import axios from "../../http";
import axios from 'axios'
const Registration = () => {


    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClick = (e) => {
        return e.preventDefault()
    }

    const reg = (e) => {
        axios({
            method:"POST",
            url:"http://localhost:5000/api/signus",
            data:{
                username:e.username.toString(),
                firstName:e.firstName.toString(),
                lastName:e.lastName.toString(),
                password:e.password.toString(),
                phoneNumber:e.phoneNumber.toString()
            }
        }).then(function (response) {
            console.log(response.data)
        })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (
        <div>
            <form action={""} onSubmit={handleClick} >
                <input type="text" onChange={e => setUsername(e.target.value)} name="username" placeholder={'логин'}/>
                <input type="text" onChange={e => setFirstName(e.target.value)} name="firstName" placeholder={'имя'}/>
                <input type="text" onChange={e => setLastName(e.target.value)} name="lastName" placeholder={'фамилия'}/>
                <input type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder={'пароль'}/>
                <input type="tel" onChange={e => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder={'номер телефона'}/>
                {phoneNumber.length !== 12
                    ? <div>Введите корректный номер телефона</div>
                    : null
                }
                <input onClick={() => reg({
                    username,
                    firstName,
                    lastName,
                    password,
                    phoneNumber
                })} type="submit" placeholder={'регистрация'}/>

            </form>
        </div>
    );
};

export default Registration;