import React, {useState} from 'react';
import s from "../UI/Input.module.css";

const Textarea = ({maxlength}) => {

    const [comment,setComment] = useState(0)

    console.log(comment)
    return (
        <>
            <textarea type="text"
                      onChange={e => setComment(e.target.value)}
                      placeholder={"Leave a comment"}
                      maxlength={maxlength}
                      className={s.input}>
            </textarea>
            <div>{comment.length} / {maxlength}</div>

        </>
    );
};

export default Textarea;