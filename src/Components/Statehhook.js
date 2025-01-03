import { useState } from 'react'

export const Statehhook = (props) => {
    const [color, setColor] = useState("black");
    console.log(color);
    
  return (
    <div className='container'>

        <h1>{props.title}</h1>
        <div style={{height : "100px", width: "100px", backgroundColor : `${color}`}}></div>

    <button className='btn btn-danger m-1' onClick={()=>setColor("red")}>Red</button>
    <button className='btn btn-success m-1' onClick={()=>setColor("green")}>Green</button>
    <button className='btn btn-warning m-1' onClick={()=>setColor("orange")}>Orange</button>

    </div>
  )
}
