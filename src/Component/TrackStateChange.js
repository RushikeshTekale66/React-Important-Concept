import React from 'react';
import { useState, useEffect, useRef } from 'react';

const TrackStateChange = () => {
    const [inputValue, setInputValue] = useState("");
    
    const previousInputValue = useRef(0);

    useEffect(()=>{
        previousInputValue.current = inputValue;
    },[inputValue])

  return (
    <>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    <h2>Current value: {inputValue}</h2>
    <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  )
}

export default TrackStateChange