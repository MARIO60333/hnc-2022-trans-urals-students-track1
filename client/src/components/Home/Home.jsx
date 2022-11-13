import React, {useState} from 'react';
import dollar from '../../img/dollar-svgrepo-com.svg';
import studio from '../../img/fm.svg';
import safe from '../../img/safe-svgrepo-com.svg';
import s from './Home.module.css';
import Footer from "../Footer/Footer";

const Home = () => {

    const [first, setFirst] = useState(false)


    return (
        <>
            <div className={s.container__main}>
                <div className={s.big__item}>
                    <div className={s.item}>
                        <h1 className={s.item__title}>Добро пожаловать на проект Ez Money </h1>
                        <p className={s.p}>Используя наш сервис, вы получаете качественное и своевременное получение донатов от своих зрителей, которые в любую секунду готовы вас поддержать</p>
                        <p className={s.p}>Благодаря нашему сервису, вы сможете с легкостью использовать его с самой популярной стриминговой программой OBS Studio</p>
                    </div>
                </div>

                <div className={s.big__item}>
                    <div className={s.big__item_row}>
                        <div className={s.item}>
                            <div className={s.item__image}>
                                <img width={100} height={100} src={dollar} alt=""/>
                            </div>
                            <div className={s.item__subtitle}>
                                Используя нас вы получаете приятную комиссию и мгновенный вывод средств
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item__image}>
                                <img width={100} height={100} src={studio} alt=""/>
                            </div>
                            <div className={s.item__subtitle}>
                                Используя нас вы получаете приятную комиссию и мгновенный вывод средств
                            </div>
                        </div>
                        <div className={s.item}>
                            <div className={s.item__image}>
                                <img width={100} height={100} src={safe} alt=""/>
                            </div>
                            <div className={s.item__subtitle}>
                                Используя нас вы получаете приятную комиссию и мгновенный вывод средств
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*<Footer/>*/}

        </>
    );
};

export default Home;