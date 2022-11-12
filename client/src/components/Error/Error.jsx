import React from 'react';
import Button from "../UI/Button";
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <>
            <div>
                <h1 style={{marginBottom:"15px"}}>404 Page Not Found</h1>
                <Link to="/">
                    <Button text={'Home page'}/>
                </Link>
            </div>
        </>
    );
};

export default Error;