import React, {useState} from 'react';
import Button from "../UI/Button";
import s from "./PayPage.module.css"
import Input from "../UI/Input";
import Textarea from "../UI/Textarea";


const PayPage = ({maxlength}) => {

    // value for data from input
    const [name,setName] = useState()


    const handleClick = (e) => {
        return e.preventDefault()
    }

    console.log(name)

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
                    <Textarea maxlength={100}/>
                    <br/>
                    <Input onClick={(e) => handleClick(e)}
                           className={s.input}
                           type="submit"
                           placeholder={"Send money"}/>
                </form>

            </div>
        </div>
    );
};

export default PayPage;