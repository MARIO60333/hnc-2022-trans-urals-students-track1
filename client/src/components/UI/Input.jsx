import React from 'react';
import s from './Input.module.css'
const Input = ({type, placeholder, onChange,onClick}) => {
    return (
        <>
            <input
                onChange={onChange}
                onClick={onClick}
                type={type}
                placeholder={placeholder}
                style={{cursor:"pointer"}}
                className={s.input}/>
        </>
    );
};

export default Input;