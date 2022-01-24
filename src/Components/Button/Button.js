import React from "react";
import './Button.css'

const Button = (props)=>{
    return (
    <div>
        <button onClick={props.click}>{props.text}</button>
    </div>
    )
}

export default Button