import React from "react";
import "./../styles/Components.css";
import comp1 from "./../assets/comp1.svg"; 
import leftLayer from "./../backgroundassets/leftLayer.svg";   
import cercle from "./../backgroundassets/cercle.svg";
export default function TitleComponent() {
    return (
        <div className="Container1">
            <div className="leftSection1">
                <img src={cercle} alt="" className="cerclebg" />
                <h1 className="titleText">
                    That story you always <br />
                    wanted to tell,<span style={{ color: "#F3796E" }}> VID it!</span>
                </h1>
                <button className="titleBtn">Get Started</button>
            </div>
            <img src={comp1} alt="comp1" />
            <img src={leftLayer} alt="logo" className="leftLayer"/>
        </div>
    );
}