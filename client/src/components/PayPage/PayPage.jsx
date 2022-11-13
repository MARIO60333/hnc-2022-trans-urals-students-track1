import React, {useState} from 'react';
import s from "./PayPage.module.css"
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";


const PayPage = () => {

    // value for data from input
    const [name,setName] = useState()



    const handleClick = (e) => {
        return e.preventDefault()
    }


    return (
        <div className={s.container__main}>
            <div className={s.container}>
                <div>avatar of streamer</div>
                <p className={s.name}>Title name streamer</p>
                <form action="">
                    <Input onChange={e => setName(e.target.value)}
                           placeholder="Write your name"
                           type="text"/>
                    <br/>
                    <Textarea maxlength={10}/>
                    <br/>
                    <Input onClick={(e) => handleClick(e)}
                           type="submit"
                           placeholder={"Send money"}/>
                </form>

            </div>
        </div>
    );
};

export default PayPage;