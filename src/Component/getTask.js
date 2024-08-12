import React, { useState } from 'react'

const GetTask = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const addTask = (task) => {
        if (task !== '') {
            setTaskList([...taskList, task]);
        }
    }

    return (
        <div>
            <div>
                <input type='text' value={task} onChange={e => {setTask(e.target.value)}} />
                <button type='button' onClick={()=>{addTask(task)}}
                >Submit</button>
            </div>
            <div>
                {
                    taskList.map((list, i) => {
                        return <li key={i}>{list}</li>
                    })
                }
            </div>

        </div>
    )
}

export default GetTask;