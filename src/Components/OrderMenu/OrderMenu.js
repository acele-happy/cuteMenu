import React from 'react'
import './OrderMenu.css'
import pizzaa from '../../assets/pizzaa.jpg'
import {FaTimes} from 'react-icons/fa'

const OrderMenu = ()=>{
    return(
        <div className="mainContainer">
            <div className="for-flex">
            <div className="imageContainer">
                <img alt="" src={pizzaa}/>
            </div>
            <p>Mushroom Pizza</p>
            </div>

            <div className="for-flex-small"> 
            <p><FaTimes /> 1</p>
            <p><sub>$</sub><strong>7.49</strong></p>
            </div>
        </div>
    )
}

export default OrderMenu