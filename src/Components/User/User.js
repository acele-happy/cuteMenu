import React from 'react'
import { AiOutlineDown } from 'react-icons/ai';
import './User.css'

const user = ()=>{
    return(
        <div>
            <div className="image">
                <img />
            </div>
            <div>
                <h2>Happy</h2>
                <p>User</p>
            </div>
            <div>
                <AiOutlineDown />
            </div>
        </div>
    )
}

export default user;