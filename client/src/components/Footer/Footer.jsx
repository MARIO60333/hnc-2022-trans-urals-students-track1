import React from 'react';
import s from "./Footer.module.css";
import copyright from '../../img/copyright-svgrepo-com.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className={s.second}>
                    <div className={s.second__row}>
                        <p><img src={copyright} alt=""/></p>
                        <span className={s.span}>H&C Trans-Urals Team 2022</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;