import React, {useState, useEffect} from 'react';

const UseEffectHook = ()=>{

    const [count, setCount] = useState(0);
    let [timer, setTimer] = useState(0);

    useEffect (()=>{
       setTimeout(()=>{
        setCount((count)=>count+1);
       }, 1000)
    })

    useEffect(()=>{
        setTimeout(()=>{
            setTimer ((timer)=timer+1);
        }, 1000);
    }, [])
    return(
        <div>
                <h1>I am UseEffectHook</h1>
                <h1>Current count is {count}</h1>
                <h1>Current timer is {timer}</h1>
        </div>
    )
}

export default UseEffectHook;