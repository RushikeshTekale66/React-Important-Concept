import React, {useState} from 'react';

function HookUseState (){
    const [state, setState] = useState("useState");

    const [color, setColor]  = useState("Pink");

    const [car, setCar] = useState({
        brand:"Mahindra",
        model:"Thar",
        color:"Black"
    })

    const updateColor = ()=>{
        setCar(previousState => {
            return {...previousState, color:"Red"}
        });
    }
    return (
        <div>
            {/* common setting the values */}
            <h1>Hi I am Hook {state}</h1>

            {/* After clicking on button we can Change the value */}
            <button type='button' onClick={()=>setColor("Blue")}>Your color is {color}</button>
            <button type='button' onClick={()=>setColor("Green")}>Your color is {color}</button>

            {/* Single hook that hold the object */}
            <h1>Your car brand is {car.brand}, model {car.model} & color is {car.color}</h1>

            {/* updating the object & array in state */}
            <button type='button' onClick={updateColor}>Click me</button>

        </div>
    )
}

export default HookUseState;