import React from 'react'
import  './MenuCategory.css'
import {MdNavigateNext} from 'react-icons/md'
import {useHistory} from 'react-router-dom'

const MenuCategory = (props)=>{

    const history = useHistory();

    const viewProduct = (id)=>{
      history.push("/product/"+id)
    }

    return(
    <div className="card" onClick={()=>viewProduct(props.id)}>
        <div className="bigCircle">
            <img className="pizza" alt="food-icon" src={props.imgSrc} />
        </div>
        <span className="color-size">{props.foodType}</span>
        <div className="smallCircle">
            <MdNavigateNext className="iconStyle"/>
        </div>
    </div>
    )
}

export default MenuCategory