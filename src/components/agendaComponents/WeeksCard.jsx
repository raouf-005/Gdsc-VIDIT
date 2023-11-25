import React from "react";
import "./../../styles/Components.css";

export default function WeeksCard(props) {
        return (
                <div className="CardStyle" style={{ gridRow: props.gridRow ,gridColumn:props.gridColumn,marginTop:props.marginTop||"0" }}>
                        <h3 className="CardTitle">{props.title}</h3>
                        <p className="CardDescription">{props.workshop1}</p>
                        <p className="CardDescription">{props.workshop2}</p>
                </div>
        );
}