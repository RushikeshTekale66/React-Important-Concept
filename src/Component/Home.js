import React, { useReducer } from 'react'

const initialState =0;

// it get two parameter as input one is state & second is action to be performed
const reducer = (state, action) => {
    console.log("Current State Value=>", state, " Which Operation performed=>",action);

    if(action.type==="INCREMENT"){
        return state+1;
    }
    if(action.type==="DECREMENT"){
        return state-1;
    }

    return state;
}

const Home = () => {

    // const [count, setCount] = useState(0);
    const [state, dispatch] =  useReducer(reducer, initialState);

    return (
        <div>
            <h1>Use Reducer</h1>
            <p>{state}</p>
            <div>
                <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
                <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
            </div>
        </div>
    )
}

export default Home