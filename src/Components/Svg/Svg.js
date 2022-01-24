import React from 'react'
import Button from '../Button/Button';
import './Svg.css'
import {useHistory} from 'react-router-dom'

const Svg = ()=>{

    const history = useHistory()

    return(
    <div className="svgBg">
        <div className="placer">
            <h3>Hello Acele</h3>
            <p>Get free derivery every <span className="color">20$</span> purchase</p>
            <Button click={()=>history.push('/aboutUs')}  text="Learn More"/>
        </div>
    </div>
)
    }

export default Svg;