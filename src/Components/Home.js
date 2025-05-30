import React, { useContext, useEffect } from 'react';
import noteContext from '../Context/Notes/noteContext';

export const Home = () => {
    const a = useContext(noteContext);
    useEffect(()=>{
        a.update();
    }, [])
    return (
        <div>Hellow {a.state.name}</div>
    )
}
