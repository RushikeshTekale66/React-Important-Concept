import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext();

const Component = () => {

    const [user, setUser] = useState("Rushikesh Tekale")
    return (
        <>
            <UserContext.Provider value={user}>
                <h1>Component 1 {user}</h1>
                <Component2 />
            </UserContext.Provider>

        </>
    )
}

const Component2 = () => {
    return (
        <>
            <h1>Component2</h1>
            <Component3/>
        </>
    )
}

//sending user directly to the 3 component from 1 component
const Component3 = ()=>{
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 3 {user}</h1>
        </>
    )
}

export default Component;