import { createContext, useState } from "react";

// create the context using the createContext
export const ConterContext = createContext(null);

export const ConterProvider = (props)=>{
    const [count, setCount] = useState(5);

    // it return the two values the value is to return & function to update the value
    return <ConterContext.Provider value={{count, setCount}}>{props.children}</ConterContext.Provider>
}