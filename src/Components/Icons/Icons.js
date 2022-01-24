import React from 'react'
import './Icons.css'
import { AiOutlineMessage, AiOutlineHeart, AiOutlineSetting, AiOutlineHome, AiOutlinePlus } from 'react-icons/ai'
import { IoNewspaperOutline } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const Icons = () =>{

    const history = useHistory();

    return(
        <div className="icons-container">
        <span>
        <AiOutlineHome />
        </span>
        <span onClick={()=>history.push("/addProduct")}>
            <AiOutlinePlus />
        </span>
        <span onClick={()=>history.push("/contact")}>
        <AiOutlineMessage />
        </span>
        <span>
        <AiOutlineHeart />
        </span>
        <span>
        <IoNewspaperOutline onClick={()=>history.push("/aboutUs")} />
        </span>
        <span>
        <AiOutlineSetting />
        </span>
    </div>
    )

}

export default Icons