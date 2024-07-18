import React, {useContext} from 'react'
import { ConterContext } from '../Context/Counter'

const Counter = () => {
    //here we can access the "Context" get the value of it & update the value of it
    const counterContext = useContext(ConterContext);
  return (
    <div>
        <button onClick={()=>counterContext.setCount(counterContext.count + 1)}>Increment</button>
        <button onClick={()=>counterContext.setCount(counterContext.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter