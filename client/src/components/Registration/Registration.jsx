import React, {useEffect, useState} from 'react';
import axios from 'axios'
import s from './Registration.module.css'


const Registration = () => {

    // Поля для полноценной регистрации

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
            console.log(response.data.status)
            if (response.data.status === 0) {
                alert('Вы успешно зарегестриовались!')
            }
            else{
                alert('Ошибка при регистрации,' +
                    ' пользователь с таким' +
                    ' именем уже существует')
            }
        })
            .catch(function (error) {
                console.log(error)
            })

    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form action={""} onSubmit={handleClick} className={s.form}>
                <input className={s.input} type="text" onChange={e => setUsername(e.target.value)} name="username" placeholder={'логин'}/>
                <input className={s.input} type="text" onChange={e => setFirstName(e.target.value)} name="firstName" placeholder={'имя'}/>
                <input className={s.input} type="text" onChange={e => setLastName(e.target.value)} name="lastName" placeholder={'фамилия'}/>
                <input className={s.input} type="password" onChange={e => setPassword(e.target.value)} name="password" placeholder={'пароль'}/>
                <input className={s.input} type="tel" onChange={e => setPhoneNumber(e.target.value)} name="phoneNumber" placeholder={'номер телефона'}/>
                {phoneNumber.length !== 12
                    ? <div>Введите корректный номер телефона</div>
                    : null
                }
                <input className={s.input_btn} onClick={() => reg({
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