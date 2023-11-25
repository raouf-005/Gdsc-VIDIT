import React from "react";
import "./../../styles/Components.css";
import weeksbg from "./../../backgroundassets/weeksbg.svg";
export default function WeeksCard(props) {
        return (
                <div className="CardStyle" 
                style={{ gridRow: props.gridRow ,gridColumn:props.gridColumn,marginTop:props.marginTop||"0" }}>
                <div className="CardTextConatainier">                        
                        <h3 className="CardTitle">{props.title}</h3>
                        <p className="CardDescription">{props.workshop1}</p>
                        <p className="CardDescription">{props.workshop2}</p>   
                </div>
                <img src={weeksbg} alt="weeksbg" className="weeksbg"/>
                </div>
        );
}