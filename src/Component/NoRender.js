import React,{useState, useEffect, useRef} from 'react'

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    // Does not clause rerender
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current+1;
    })

    return (
        <div>
           <input type='text' value={inputValue} onChange={e=>setInputValue(e.target.value)}/>
           <h3>Render count is : {count.current}</h3>
        </div>
    )
}

export default Home