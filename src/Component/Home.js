import React, { useCallback } from 'react'
import { useState } from 'react'
import Todos from './Todos';

const Home = () => {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = ()=>{
        setCount(count+1);
    }

    // By using useCallback website can't render the todo still we update it
    // Only website render when we update todos
    const addTodo = useCallback(()=>{
        setTodos((prev)=>[...prev, 'new Entry']);
    }, [todos])

    // without todo website render todos if it change state or not
    // const addTodo=()=>{
    //     setTodos((prev)=>[...prev, 'new Entry']);
    // }

  return (
    <div>
        <h1>useCallback</h1>
        <Todos todos={todos} addTodo={addTodo}/>
        <hr/>
        <div>
            count:{count}
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Home