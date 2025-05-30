// NoteState.js
import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {

  const [state, setState] = useState("");
  const update = ()=>{
    setTimeout(()=>{
        setState({
            "name":"Rushikesh",
            "class":"10b"
        })
    }, 1000)
  }

  return (
    <NoteContext.Provider value={{state, update}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
