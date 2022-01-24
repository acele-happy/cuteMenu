import React,{useEffect} from "react";
import './MenuFullView.css'
import {AiOutlinePlus} from 'react-icons/ai'
import {useParams} from 'react-router-dom'

const MenuFullView = (props)=>{
    const params = useParams()

    useEffect(()=>{
      if(params?.id){
        alert(params.id)
      }
    },[params.id])

    return (
        <div className="recipeContainer">
            <img className="img-over" alt="" src={props.imgSrc}/>

            <div className="div-inside">
                <h4>{props.recipeName}</h4>
                <span></span>
                <p><sub>$</sub>{props.price}</p>
            </div>
            <div>
                <AiOutlinePlus className="div-icon"/>
            </div>
        </div>
    )
}

export default MenuFullView