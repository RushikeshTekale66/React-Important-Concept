import React, { useState } from 'react'

const GetTask = () => {
    const [task, setTask] = useState('');
    const [List, setList] = useState([]);

    const addTask = (task)=>{
        if(task!==''){
            setList([...List, task]);
            console.log(task);
            
        }
    }
  return (
    <div>
        <div>
            <input type='text' value={task} onChange={(e)=>setTask(e.target.value)}/>
            <button type='submit' onClick={()=>addTask(task)}>Submit Task</button>
        </div>
        <div>
            {
                List.map((list, i)=>{
                    return <p >{list}</p>
                })
            }
        </div>
    </div>
  )
}

export default GetTask