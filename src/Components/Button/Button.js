import React from "react";
import './Button.css'

const button = (props)=>{
    return (
    <div>
        <button onClick={props.click}>{props.text}</button>
    </div>
    )
}

export default button