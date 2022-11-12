import React, {useEffect, useState} from 'react';

const Donate = () => {

    // JSON about donation history
    // const [items, setItems] = useState()
    //
    // useEffect(async() => {
    //     await fetch('')
    //         .then(res => res.json())
    //         .then(json => setItems(json))
    // },[])

    return (
        <div style={{color:'white'}}>
            <h2>Donation page</h2>
            <div>
                <div> Last donations</div>
                {/*{*/}
                {/*    items.map(el => */}
                {/*        <div>{el}</div>*/}
                {/*    )*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Donate;