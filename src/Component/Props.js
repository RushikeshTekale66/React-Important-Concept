import React from 'react';

const Props = (props)=>{
    return(
        <>
        <h1>I am {props.name}</h1>
        <h1>My Last Name is {props.lname}</h1>
        <h1>I live in {props.city}</h1>
        <h1>I like {props.like}</h1>
        </>
    )
}

export default Props;