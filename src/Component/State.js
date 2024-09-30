import React from 'react';
import { useState } from 'react';

const State = ()=>{
    const [name, setName] = useState('Rushi');
    const [color, setColor] = useState("Red");

    return (
        <>
            <h1 >My Name is {name}</h1>
            <button onClick={()=>setColor("Black")}>{color}</button>
        </>
    )
}

export default State;