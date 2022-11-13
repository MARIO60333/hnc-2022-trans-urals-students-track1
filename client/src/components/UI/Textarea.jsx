import React, {useState} from 'react';
import s from "../UI/Input.module.css";

const Textarea = ({maxlength}) => {

    const [comment,setComment] = useState()

    const limit = () => {
        return (comment.length <= maxlength ? comment.length : 0 )
    }

    console.log(comment)
    return (
        <>
            <textarea type="text"
                      onChange={e => setComment(e.target.value)}
                      placeholder={"Leave a comment"}
                      maxlength={maxlength}
                      // value={limit}
                      className={s.input}>
            </textarea>
            <div>{comment ? comment.length : 0} / {maxlength}</div>

        </>
    );
};

export default Textarea;