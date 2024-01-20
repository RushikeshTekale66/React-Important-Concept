import React from 'react';

export default function Event(){
    function shoot1 (){
        alert("shoot 1")
    }
    function shoot2(a){
        alert(a);
    }
    function shoot3(a, b){
        alert(a + b.type);
    }
    return(
        <div>
            <h1>I am Event</h1>
            {/* Normal onClick Event */}
            <button type='button' onClick={shoot1}>Click me 1</button>

            {/* Argument passing onclick event */}
            <button type='button' onClick={()=>shoot2("Shoot 2")}>Click me 2</button>

            {/* Sending the event object manualy */}
            <button onClick={(event)=>shoot3("shoot3", event)}>click me 3</button>
        </div>
    )
}