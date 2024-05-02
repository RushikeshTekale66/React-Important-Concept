import React from 'react'
import { useState, useMemo } from 'react'

const Home = () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    // countNumber will run only when we chenge the myNum
    // This will increase the performance of the site
    // It always return the memorized value
    const sum = useMemo(()=>{
        return value1+value2;
    }, [value1, value2]);

    // const checkData = countNumber(myNum);

  return (
    <div>
        <p>value1 :  {value1}</p>
        <p>value2 :  {value2}</p>
        <p>Sum : {sum}</p>
        <button onClick={()=>setValue1(value1+1)}>Increment value1</button>
        <button onClick={()=>setValue2(value2+1)}>Increment value2</button>
    </div>
  )
}

export default Home