import React from 'react'
import { useState, useMemo } from 'react'

const Home = () => {
    const [myNum, setMyNum] = useState(0);
    const [show, setShow] = useState(true);

    const getValue=()=>{
        return setMyNum(myNum+1);
    }

    const countNumber = (num)=>{
        console.log("Count number", num);
        for(let i=0; i<10000; i++){}
            return num;
    }

    // countNumber will run only when we chenge the myNum
    // This will increase the performance of the site
    // It always return the memorized value
    const checkData = useMemo(()=>{
        return countNumber(myNum);
    }, [myNum]);

    // const checkData = countNumber(myNum);

  return (
    <div>
        <h1>useMemo</h1>
        <button onClick={getValue} style={{backgroundColor:"red"}}>
            Counter
        </button>
        <p>My new Number: {checkData}</p>
        <button onClick={()=>setShow(!show)}>
            {show?"You clicked me":"Click me plz"}
        </button>
    </div>
  )
}

export default Home