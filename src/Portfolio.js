import React from "react";
import "./Portfolio.css";


export default function Portfolio (props){

    return(

        <div>
            
        <h1>Moose Yetis</h1>
        
        
        <div className="container">
            
        <img className="img2" src={props.source1} alt="Moose Yeti 2"></img>
        <img className="img1" src={props.source2} alt="Moose Yeti 1"></img>
        <img className="img3" src={props.source3} alt="Moose Yeti 3"></img>
        </div>
        </div>
        )
}