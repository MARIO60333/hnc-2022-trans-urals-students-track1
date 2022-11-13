import React from 'react';
import s from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className={s.row}>
                <ul className={s.ul}>
                    <Link className={s.home} to="/">
                        <span className={s.span}>eZ</span>EzMoney
                    </Link>

                    {/*<Link className={s.item} to="/dashboard">Dashboard</Link>*/}

                    <Link className={s.item} to="/donate">Donate</Link>
                    <Link className={s.item} to="/streamername">streamername</Link>

                    <div className={s.secondary}>
                        <Link className={s.item} to="login">log in</Link>
                        <Link className={s.item} to="register">Registration</Link>
                    </div>
                </ul>
            </div>
        </>
    );
};

export default Header;