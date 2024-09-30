import React from 'react';

const Event = ()=>{
    const event1 = ()=>{
        alert("Event 1 is fired");
    }
    const event2 = (event)=>{
        alert(event);
    }
    const event3 = (a, b)=>{
        alert(a + b.type);
    }
    return (
        <>
            {/* Normal Event */}
            <button type='button' onClick = {event1}>Normal Event</button>
            <br/>

            {/* Event as an argument */}
            <button type='button' onClick={()=>event2("Event is fired")}>Button Argument</button>
            <br/>

            {/* Sending event as an object manualey */}
            <button type='button' onClick={(e)=>event3("Event 3", e)}>Object Evenet</button>
        </>
    )
}
export default Event;