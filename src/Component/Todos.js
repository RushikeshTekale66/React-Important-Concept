import React, {memo} from 'react'

const Todos = ({todos, addTodo}) => {
    console.log("Child render");
  return (
    <>
    <div>Todos</div>
    {
        todos.map((todo, index)=>{
            return <p key={index}>{todo+index}</p>
        })
    }
    <button onClick={addTodo}>Add Todo</button>
    </>
  )
}

// by using memo website render only once

export default memo(Todos);