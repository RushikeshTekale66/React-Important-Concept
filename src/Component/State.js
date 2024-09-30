import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const State = ()=>{
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count + 1);
        }, 1000);
    })

    useEffect(()=>{
        setTimeout(()=>{
            setTimer((timer)=>timer+1);
        },2000)
    }, [])

    return (
        <>
           <h1>Current Count is {count}</h1>
           <h1>Timer is {timer}</h1>
        </>
    )
}

export default State;