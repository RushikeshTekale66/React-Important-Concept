import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const s1 ={
        "name":"Rushikesh",
        "class":"BE"
    }

    const [state, setState] = useState(s1);

    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Rohan",
                "class":"BSc"
            })
        }, 2000)
    }



    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;