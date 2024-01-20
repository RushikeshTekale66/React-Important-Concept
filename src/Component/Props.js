import React from "react";

export default function Props (props){
    return (
        <div>
            <h1>I am {props.name}</h1>
            <h1>Last name {props.lname}</h1>
            <h1>I live in {props.state}</h1>
            <h1>I use the bike of company {props.company.company}</h1>
        </div>
    )
}